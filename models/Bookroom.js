const mongoose = require('mongoose')
const {Schema} = mongoose;

const bookSchema= new Schema({
    room:{type:mongoose.Schema.Types.ObjectId,ref:'room'},
    customerName:{type:String,require:true},
    stimeEtime:{type:String,require:true},
    status:{type:String,default:"Panding"},
    date:{type:Date,default:Date.now}
})
const Book = mongoose.model('book',bookSchema)
module.exports = Book;