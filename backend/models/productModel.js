const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productModel = new Schema({
    name:{type:String},
    category:{type:String},
    price:{type:Number},
    discount:{type:Number},
    description:{type:String},
    image:{type:String},
    create_on:{typr:String},
    isTopProduct:{type:Boolean}
})

module.exports = mongoose.model('product', productModel)