const router = require('express').Router()
const Owner = require('../models/owner');

router.post("/addOwner", async(req, res) => {
    try {
        let owner = new Owner();
        owner.name = req.body.name,
        owner.about = req.body.about,
        owner.photo = req.body.photo

        await owner.save();

        res.json({
            success: true,
            message: "successfully crateed a new owner"
        });

    }catch (err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

router.get("/getAllOwners", async (req, res) => {
    try{
        let owners = await Owner.find();
        res.json({
            success: true,
            owners: owners
        });
    }catch (err){
        res.status(500).json({
            sucess: false,
            message: err.message
        });
    }
})

module.exports = router;