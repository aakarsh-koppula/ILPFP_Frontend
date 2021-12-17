const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    firstname:{type:String, required : true},
    lastname:{type:String, required : true},
    email:{type:String, required : true},
    phone:{type:String},
    street:{type:String},
    city:{type:String},
    state:{type:String},
    zip:{type:String},
    password:{type:String},
    image:{type:String}
})

module.exports = mongoose.model('users',userModel)