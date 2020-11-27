const express = require('express');
const morgan = require('morgan');
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
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.json("gym-e-commerce-app");
})

app.post('/addUser', (req, res) => {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(err => {
        if(err){
            res.json(err);
        } else {
            res.json("successfully saved");
        }
    })

})

// require routes
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const ownerRoutes = require('./routes/owner');
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/owner', ownerRoutes);




app.listen(3000, err => {
    if(err){
        console.log(err);
    }
    else console.log('server running on port 3000');
})