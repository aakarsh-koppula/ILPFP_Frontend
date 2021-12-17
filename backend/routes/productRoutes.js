const express = require('express')
var mongo = require('mongodb');
const router = express.Router();

const productModel = require('../models/productModel');

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

module.exports = router;
