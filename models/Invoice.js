const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
    invoiceItems: [
        {
            name: {type: String, required: true},
            quantity: {type: Number, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true}
        }
    ],
    customerName: {type: String, required: true},
    totalPrice: {type: Number, required: true},
    userId: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

const InvoiceModel = mongoose.model('InvoiceModel', invoiceSchema);

module.exports = InvoiceModel;