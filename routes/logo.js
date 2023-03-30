const LogoModel = require("../models/Logo");

const router = require("express").Router();

router.post("/", async (req, res)=> {
    const newLogo = new LogoModel(req.body);

    try {
        const savedLogo = await newLogo.save();
        res.status(200).json(savedLogo);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.put("/:id", async (req, res)=> {
    try {
        const updatedLogo = await LogoModel.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
        res.status(200).json(updatedLogo);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

router.delete("/:id", async(req, res) => {
    try {
        await LogoModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Logo Deleted!");
    } catch (error) {
        res.status(500).json(error.message);
    }
})

router.get("/", async (req, res) => {
    try {
        const logo = await LogoModel.find();
        res.status(200).json(logo);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

module.exports = router;