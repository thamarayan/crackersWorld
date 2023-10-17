var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    code:{type:Number},
    name: {type:String, required:true},
    content:{type:String, required:true},
    type:{type:String, required:true},
    actualPrice:{type:Number, required:true},
    discountPrice:{type:Number, required:true},
    availability:{type:Boolean,default:0}   
});

module.exports = mongoose.model('Product', schema);