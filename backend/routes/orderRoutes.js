const express = require('express');
var mongo = require('mongodb');
const router = express.Router();

const orderModel = require('../models/orderModel');

// get all orders
router.get('/', (req, res) => {
    orderModel.find((err, result) => {
        if (err) { throw err; }
        else {
            res.send(result);
        }
    })
})

// process one product
router.patch('/:id', (req, res) => {
    var id = req.params.id;
    
    const now = new Date();
    
    var mongo_id = new mongo.ObjectID(id);
    var filter = { '_id': mongo_id};
    var set = {
        $set: {
            "orderDeliveredOn": now.toISOString(),
            "isDelivered": true
        }
    };
    orderModel.updateOne(filter, set, (err, result) => {
        if (err) { throw err; }
        else {
            res.send(result);
        }
    })
})

// Delete by ID
router.delete('/:id', (req, res) => {
    var id = req.params.id;
    var mongo_id = new mongo.ObjectID(id);
    var filter = { '_id': mongo_id};
    orderModel.deleteOne(filter, (err, result) => {
        if (err) { throw err; }
        else {
            res.send(result);
        }
    })
})

module.exports = router;
