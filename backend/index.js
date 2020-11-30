const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const User = require('./models/user');

dotenv.config();

const app = express();

// connect with mongo
mongoose.connect(
    process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if(err){
            console.log(err);
        }else {
            console.log("Connected to the database");
        }
    }
)

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/uploads',express.static('uploads')); // make the uploads folder publicly available

// test route
app.get('/', (req, res) => {
    res.json("gym-e-commerce-app");
})


// require routes
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const ownerRoutes = require('./routes/owner');
const userRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/review');
const addressRoutes = require('./routes/address');
const paymentRoutes = require('./routes/payment');
const orderRoutes = require('./routes/order');
const searchRoutes = require('./routes/search');

app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/owner', ownerRoutes);
app.use('/review', reviewRoutes);
app.use('/address', addressRoutes);
app.use('/payment', paymentRoutes);
app.use('/order',orderRoutes)
app.use('/search',searchRoutes);

app.listen(5000, err => {
    if(err){
        console.log(err);
    }
    else console.log('server running on port 5000');
})