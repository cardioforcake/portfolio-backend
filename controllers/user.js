const User = require('../models/user');

function index(req,res){
    User.find({}, function(err, users){
        const user = users.filter(usr => usr.userId === req.params.id)
        res.status(200).json(user)
    });
}

function create(req, res){
    User.create(req.body, function(err){
        User.find({}, function(errr, users){
            const user = users.filter(usr => usr.userId === req.params.id)
            res.status(200).json(user)
        });
    })
}

function update(req, res){
    User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
        User.find({}, function(errr, users){
            const user = users.filter(usr => usr.userId === req.params.id)
            res.status(200).json(user)
        });
    })
}

function deleteComment(req, res){
    User.findByIdAndDelete(req.params.id, function(){
        index(req,res);
    })
}

module.exports={
    create,
    index,
    update,
    deleteComment,  
}