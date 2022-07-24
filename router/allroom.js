const express = require('express')
const router = express.Router()
const Room = require('../models/Room')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "HappyJurny"
router.post('/createRoom',async (req,res)=>{
   let room = await Room.findOne({roomId:req.body.roomId})
   if(room){
   return res.status(401).json({error:'Sorry this room detail already exist'})
   }
   room = await Room.create({
        roomId: req.body.roomId,
        seatsAvailble: req.body.seatsAvailble,
        amenities:req.body.amenities,
        priseForOneHour:req.body.priseForOneHour,
        bookingDetail:req.body. bookingDetail
      })
     const data = {
      room:{
        id:room.id
      }
     }
     const authtoken = jwt.sign(data,JWT_SECRET)

    res.send(authtoken)
})
router.get('/fetchallroom',async (req,res)=>{
   let room = await Room.find()
   
    res.send(room)
})
module.exports = router;