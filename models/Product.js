const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String},
    mediaUrl: {type: String},
    quantity: {type: Number, required: true},
    supplier: {type: String},
    isActive: {type: Boolean, default: true},
    details: {
        totalReviews: {type: Number},
        rating: {type: Number},
        availabilityStatus: {type: String},
        productCode: {type: String},
        productCategory: {type: String},
        image1: {type: String},
        image2: {type: String},
        image3: {type: String},
        image4: {type: String},
    }
});

const ProductModel = mongoose.model('ProductModel', productSchema);

module.exports = ProductModel;