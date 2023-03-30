const mongoose = require("mongoose");

const logoScheam = mongoose.Schema({
    logoText: {type: String},
    logoImage: {type: String},
    color: {type: String}
});

const LogoModel = mongoose.model("LogoModel", logoScheam);

module.exports = LogoModel;