const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user')

router.get('/user/:id', userCtrl.index);
router.post('/add', userCtrl.create);
router.put('/update/:id', userCtrl.update)
// router.delete('/delete/:id', userCtrl.deleteComment)


module.exports=router;