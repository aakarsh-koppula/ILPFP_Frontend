const express = require('express')
const router = express.Router();
const orderModel = require('../models/orderModel');
var mongo = require('mongodb');
/* router.post('/update-user', (req, res) => {
    usermodel.findOneAndUpdate({ email: req.body.email }, {
        $set: { firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phone, street: req.body.street, city: req.body.city, state: req.body.state, zip: req.body.zip }
    }, { upsert: true }
        , (err, result) => {
            if (err) {
                return console.log(err);
            } else {
                console.log('updated the user in  database')
                res.send('success')
            }
        })
}) */

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



router.post('/add-order', (req, res) => {
    orderModel.create(req.body, (err, results) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('saved to database')
            res.send('success')
        }
    })
})

module.exports = router;