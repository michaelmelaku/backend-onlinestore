const router = require("express").Router();
const UserProfileModel = require('../models/UserProfile');
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register",  async(req, res) => {
    const {firstName, lastName,  email, password, confirmPassword} = req.body;
    try {
        const existingUser = await UserProfileModel.findOne({email});
        if(existingUser) return res.status(400).json({message: "User already exists."});
        if( password !== confirmPassword) return res.status(400).json({message: "Password don't match"});

        const hashedPassword = CryptoJS.AES.encrypt(password, 'test').toString();
        const user = await UserProfileModel.create({firstName, lastName, email, password: hashedPassword});

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SECRET, {expiresIn: "3d"});
        
        return res.status(200).json({...user._doc, accessToken});
    } catch (err) {
        return res.status(500).json(err.message);
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await UserProfileModel.findOne({email: req.body.email});
        
        if(!user) return res.status(401).json("Wrong credential!");


        const hashedPassword = CryptoJS.AES.decrypt(user.password, 'test');

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if(originalPassword !== req.body.password) return res.status(401).json("Incorrect password!");
        
        const accessToken = jwt.sign({
            id:user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SECRET, {expiresIn: "3d"});

        const {password, ...others} = user._doc;
        return res.status(200).json({...others, accessToken});
    } catch(err) {
        return res.status(500).json(err);
    }
});

module.exports = router;