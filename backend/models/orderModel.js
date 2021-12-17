const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderModel = new Schema({
    user:{type:String},
    orderPlacedOn:{type:String},
    isDelivered:{type:Boolean},
    orderDeliveredOn:{type:String},
    cart:[{type: Schema.Types.Mixed}]
})

module.exports = mongoose.model('order', orderModel)