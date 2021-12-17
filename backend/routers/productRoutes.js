const express = require('express')
const router = express.Router();
const productModel = require('../models/productModel');
var mongo = require('mongodb');


router.get('/top-products', (req, res) => {
    productModel.find({ isTopProduct: true }, (err, results) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('returned')
            res.send(results)
        }
    })
})

router.post('/add-product', (req, res) => {
    productModel.create(req.body, (err, results) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('saved to database')
            res.send('success')
        }
    })
})

// Get all products list
router.get('/', (req, res) => {
    productModel.find((err, result) => {
        if (err) { throw err; }
        else {
            res.send(result);
        }
    })
})

// Get product by ID
router.get('/:PRODUCT_ID', (req, res) => {
    var id = req.params.PRODUCT_ID;
    var mongo_id = new mongo.ObjectID(id);
    productModel.findOne({'_id':mongo_id}, (err, result) => {
        if (err) { throw err; }
        else {
            res.send(result);
        }
    })
})

router.post('/category', (request, response) => {
    productModel.find( {category: {$regex: request.body.category, $options: "$i"}}, (error, result) => {
        if (error)
        {
            console.log(request.body);
            throw error;
        }
        else
        {
            console.log(request.body.category);
            console.log(result);
            response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            response.send(result);
        }
    })

})

module.exports = router;
