const express = require('express')
const router = express.Router()
const Book = require('../models/Bookroom')
const fetchData = require('../middelware/fetchdata')
const Room = require('../models/Room')
router.post('/bookroom',fetchData,async (req,res)=>{

   let book = await Book.findOne({stimeEtime:req.body.stimeEtime ,room:req.room.id})
   const room = await Room.findOne({_id:req.room.id})
    console.log(room)
   if(book){
    return res.send(401).json({error:'This session already booking'})
   }
   book = await Book.create({
    room:req.room.id,
    customerName: req.body.customerName,
    stimeEtime:req.body.stimeEtime,
    status:req.body.status
  })
    
  if(room){
    room.bookingDetail.push({...book,book})
  }
  // console.log(room.bookingDetail)
  console.log(room)
    res.send(book)


})

router.get('/fetchallcustomer',async (req,res)=>{

   let book = await Book.find()
    res.send(book)
})
module.exports = router;