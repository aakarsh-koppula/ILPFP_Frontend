const express = require('express');
var mongo = require('mongodb');
const router = express.Router();

const productModel = require('../models/productModel');

// add one product
router.post('/products', (req, res) => {
    const now = new Date();
    req.body.create_on = now.toISOString();
    productModel.create(req.body, (err, result) => {
        if (err) { throw err; }
        else {
            res.send(result);
        }
    })
})

// Edit one product
router.patch('/products/:id', (req, res) => {
    var id = req.params.id;
    var mongo_id = new mongo.ObjectID(id);
    var filter = { '_id': mongo_id};
    var set = {
        $set: req.body
    };
    productModel.updateOne(filter, set, (err, result) => {
        if (err) { throw err; }
        else {
            res.send(result);
        }
    })
})

// Delete by ID
router.delete('/products/:id', (req, res) => {
    var id = req.params.id;
    var mongo_id = new mongo.ObjectID(id);
    var filter = { '_id': mongo_id};
    productModel.deleteOne(filter, (err, result) => {
        if (err) { throw err; }
        else {
            res.send(result);
        }
    })
})

module.exports = router;
