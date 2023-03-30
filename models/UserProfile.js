const mongoose = require('mongoose');

const userProfileSchema = mongoose.Schema({
    userId: {type: String},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String},
    phoneNumber: {type: String},
    country: {type: String},
    city: {type: String},
    addressLine1: {type: String},
    zipCode: {type: String},
    shippingDivision: {type: String},
    shippingOption: {type: String},
    isActive: {type: Boolean, default: true},
    isAdmin: {type: Boolean, default: false},
});

const UserProfileModel = mongoose.model('UserProfileModel', userProfileSchema);

module.exports = UserProfileModel;