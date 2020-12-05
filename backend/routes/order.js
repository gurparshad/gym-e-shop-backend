const router = require('express').Router()
const Order = require('../models/order');
const verifyToken = require("../middlewares/verify-token");

router.get("/allOrders", verifyToken, async(req,res) => {
    try{
        let products = await Order.find({ owner: req.decoded._id })
        .deepPopulate("owner products.prodId.owner")
        .exec();
        res.json({
            success: true,
            products: products
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

//  get a single order
router.get("/orderDetails/:orderId", verifyToken, async(req,res) => {
    try{
        let order = await Order.findById({_id: req.params.orderId})
        .deepPopulate("owner products.prodId.owner")
        .exec();
        res.json({
            success: true,
            order: order
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})


module.exports = router;