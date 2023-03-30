 const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderItems: [
        {
            name: {type: String, required: true},
            quantity: {type: String, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true}
        }
    ],
    shippingAddress: {
        fullName: {type: String, required: true},
        address: {type: String, required: true},
        city: {type: String, required: true},
        postalCode: {type: String, required: true},
        country: {type: String, required: true},
    },
    orderStatus: {type: String, default: 'Pending'},
    totalPrice: {type: Number, required: true},
    userId: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

const OrderModel = mongoose.model('OrderModel', orderSchema);

module.exports = OrderModel;