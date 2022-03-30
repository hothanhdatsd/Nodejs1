/** @format */

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    quantity: {
        type: Number,
        default: 1,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    price: {
        type: Number,
        ref: 'Course',
    },
    totalPrice: {
        type: Number,
        ref: 'Course'
    }

}, {
    collection: 'Cart'
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;