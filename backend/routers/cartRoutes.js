const express = require('express')
const router = express.Router();
const cartmodel = require('../models/cart_model');

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

router.get('/all-items-in-cart/:email', (req, res) => {
    cartmodel.find({ email: req.params.email }, (err, results) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('saved to database')
            res.send(results)
        }
    })
})

router.delete('/all-items-in-cart/:email', (req, res) => {
    cartmodel.deleteMany({ email: req.params.email }, (err, results) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('saved to database')
            res.send(results)
        }
    })
})


router.post('/add-cart', (req, res) => {
    cartmodel.create(req.body, (err, results) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('saved to database')
            res.send('success')
        }
    })
})

module.exports = router;