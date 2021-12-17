const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartModel = new Schema({
    
    email:{type:String, required : true},
    name:{type:String},
    category:{type:String},
    price:{type:Number},
    discount:{type:Number},
    description:{type:String},
    image:{type:String},
})

module.exports = mongoose.model('cart',cartModel)