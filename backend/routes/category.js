const router = require('express').Router()
const Category = require('../models/category');

router.post("/addCategory", async (req, res) => {
    try {
        const category = new Category();
        category.type = req.body.type;

        await category.save();

        res.json({
            success: true,
            message: "successfully crateed a new category"
        });

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

router.get("/getCategories", async (re, res) => {
    try {
        let categories = await Category.find();
        res.json({
            success: true,
            categories: categories
        });
    }catch (err){
        res.status(500).json({
            sucess: false,
            message: err.message
        });
    }
})

module.exports = router;

