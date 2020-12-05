const router = require('express').Router()
const Product = require('../models/product');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({storage: storage});

// add a product
router.post("/addProduct", upload.single('photo'), async (req, res) => {
    console.log(req.file);
    try {
        let product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.file.path;
        product.price = req.body.price;
        product.stockQuantity = req.body.stockQuantity;
        product.owner = req.body.ownerId;
        product.category = req.body.categoryId

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

// get all products of single Category
router.get("/getAllProducts/:categoryId", async(req, res) => {
    try{
        let products = await Product.find({category: req.params.categoryId});
        res.json({
            success: true,
            products: products
        })
    }catch(err){
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

