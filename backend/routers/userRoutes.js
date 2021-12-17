const express = require('express')
const router = express.Router();
const usermodel = require('../models/user_model');

router.post('/update-user', (req, res) => {
    usermodel.findOneAndUpdate({ email: req.body.email }, {
        $set: { firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phone, street: req.body.street, city: req.body.city, state: req.body.state, zip: req.body.zip, image: req.body.image }
    }, { upsert: true }
        , (err, result) => {
            if (err) {
                return console.log(err);
            } else {
                console.log('updated the user in  database')
                res.send('success')
            }
        })
})

router.get('/user-data/:email', (req, res) => {
    usermodel.find({ email: req.params.email }, (err, results) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('saved to database')
            res.send(results)
        }
    })
})


router.post('/add-user', (req, res) => {
    usermodel.create(req.body, (err, results) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('saved to database')
            res.send('success')
        }
    })
})

router.get('/', (request, response) => {
    usermodel.find((error, result) => {
        if (error) 
        { 
            throw error; 
        }
        else 
        {
            response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            response.render('users.ejs', { users: result });
        }
    })

})

router.post('/', (request, response) => {
    usermodel.findOne({ email: request.body.email, password: request.body.password }, (error, result) => {
            if (error) 
            {
                return console.log(error);
            } 
            else 
            {
                response.send(result);
            }
        })
})

module.exports = router;