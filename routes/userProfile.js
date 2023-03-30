const router = require('express').Router();
const UserProfileModel = require('../models/UserProfile');
const  {verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken');

//CREATE PERSON
router.post('/',  async(req, res) => {
    const newPerson = new UserProfileModel(req.body);
    try {
        const savedPerson = await newPerson.save();
        return res.status(200).json(savedPerson);
    }
    catch(err){
        return res.status(500).json(err);
    }
});

//UPDATE PERSON
router.put("/:id",  async(req, res) => {
    try {
        const updatedPerson = await UserProfileModel.findByIdAndUpdate(req.params.id, 
            {$set: req.body}, {new: true});
        return res.status(200).json(updatedPerson);
    }
    catch(err){
        return res.status(500).json(err);
    }
});

//GET PERSON
router.get("/:id",  async(req, res) => {
    try {
        const persons = await UserProfileModel.find({userId: req.params.id});
        return res.status(200).json(persons);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get("/find/:id", async(req, res) => {
    try {
        const userProfiles = await UserProfileModel.findById(req.params.id);
        return res.status(200).json(userProfiles);
    } catch (error) {
        console.log(error.message);
    }
})

router.get("/",  async(req, res) => {
    try {
        const userProfiles = await UserProfileModel.find();
        return res.status(200).json(userProfiles);
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;