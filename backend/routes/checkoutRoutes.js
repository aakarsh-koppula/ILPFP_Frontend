const express = require('express');
var mongo = require('mongodb');
const router = express.Router();

const orderModel = require('../models/orderModel');

// add one order
router.post('/', (req, res) => {
    const now = new Date();
    req.body.orderPlacedOn = now.toISOString();
    orderModel.create(req.body, (err, result) => {
        if (err) { throw err; }
        else {
            res.send(result);
        }
    })
})

module.exports = router;