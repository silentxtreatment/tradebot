const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const order = require('./Order')

const userSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true,
    },
    balance: {
        type: Number,
        required: false,
        default: 0
    },
    profit: {
        type: Number,
        required: false,
        default: 0,
    },
    orders: {
        type: [order.schema],
        required: false,
    }
});

module.exports = mongoose.model('User', userSchema);