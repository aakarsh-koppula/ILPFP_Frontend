const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
let mongoosedb = mongoose.connect('mongodb://127.0.0.1:27017/shop');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PATCH, POST, GET, DELETE, OPTIONS');
    next();
  });

const productRoutes = require('./routes/productRoutes');

app.use('/api/v1/products',productRoutes);

const adminRoutes = require('./routes/adminRoutes')
app.use('/api/v1/admin',adminRoutes);

const orderRoutes = require('./routes/orderRoutes')
app.use('/api/v1/orders',orderRoutes);

app.listen(3600, function(){
    console.log("server started in port 3600");
})