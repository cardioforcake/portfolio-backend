const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        default: 'anonymous'
    },
    userId: {
        type: String,
        default: ''
    },
    snakeScore: {
        type: Number,
        default: 0
    }
},{timestamps: true});

module.exports = mongoose.model('User', userSchema);
