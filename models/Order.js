const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    active: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model('Order', orderSchema);