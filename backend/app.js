const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
let mongoosedb = mongoose.connect('mongodb://127.0.0.1:27017/shop');
const usermodel = require('./models/user_model');
const ordermodel = require('./models/orderModel');
const cartmodel= require('./models/cart_model');
const productmodel= require('./models/productModel');
const cors = require('cors');


const userRoutes = require('./routers/userRoutes')
const orderRoutes = require('./routers/orderRoutes')
const cartRoutes = require('./routers/cartRoutes')
const productRoutes = require('./routers/productRoutes')
const adminRoutes = require('./routers/adminRoutes')
const checkoutRoutes = require('./routers/checkoutRoutes')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users',userRoutes);
app.use('/cart',cartRoutes);
app.use('/api/v1/products',productRoutes);
app.use('/api/v1/admin',adminRoutes);
app.use('/api/v1/orders',orderRoutes);
app.use('/api/v1/checkout',checkoutRoutes);

app.get('/',(req,res)=>{
    res.send('Welcome');
})
app.listen(3600, function () {
    console.log("server started in Port 3600")
})