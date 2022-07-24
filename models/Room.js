const mongoose = require('mongoose')
const {Schema} = mongoose;

const roomSchema = new Schema({
    roomId:{type:Number,require:true},
    seatsAvailble:{type:Number,require:true},
    amenities:{type:Array,require:true},
    priseForOneHour:{type:Number,require:true},
    bookingDetail:{type:Array,require:true}
})
const Room = mongoose.model('room',roomSchema)
module.exports = Room;