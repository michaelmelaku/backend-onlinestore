const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId: {type: String},
    cartItems: [
        {
            productId: {type: String},
            quantity: {type: Number, default: 1},
        }
    ],
},
{ timestamps: true }
);

const CartModel = mongoose.model('CartModel', cartSchema);

module.exports = CartModel;