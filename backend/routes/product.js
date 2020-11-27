const router = require('express').Router()
const Product = require('../models/product');

// add a product
router.post("/addProduct", async (req, res) => {
    try {
        let product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.body.photo;
        product.stockQuantity = req.body.stockQuantity;

        await product.save();

        res.json({
            status: true,
            message: "Successfully saved"
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

// get all products
router.get("/getAllProducts", async (req, res) => {
    try{
        let products = await Product.find();
        res.json({
            success: true,
            products: products
        });
    }catch (err){
        res.status(500).json({
            sucess: false,
            message: err.message
        });
    }
})

// get single product
router.get("/getProduct/:id", async (req, res) => {
    try{
        let product = await Product.findOne({_id: req.params.id});
        res.json({
            success: true,
            product: product
        });
    }catch (err){
        res.status(500).json({
            sucess: false,
            message: err.message
        });
    }
})

// update a product
router.put('/updateProduct/:id', async (req, res) => {
    try{
        let product = await Product.findOneAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
                    category: req.body.categoryId,
                    photo: req.body.photo,
                    description: req.body.description,
                    owner: req.body.ownerId
                }
            },
            {new: true, upsert: true},
            // upsert: true ----> if product does not exists it will create a new one.
            // new: true ======> is to return a new updated object and not the original one.
        );

        res.json({
            success: true,
            updatedProduct: product
        });

    } catch (err) {
        res.status(500).json({
            sucess: false,
            message: err.message
        });
    }
})

// delete a product 
router.delete("/deleteProduct/:id", async (req, res) => {
    try{
        let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id});
        if(deletedProduct){
            res.json({
                status: true,
                message: "Succcessfullyy deleted",
                deletedProduct: deletedProduct
            })
        }
    }catch (err){
        res.status(500).json({
            sucess: false,
            message: err.message
        });
    }
})


module.exports = router;

