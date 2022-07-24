const jwt = require('jsonwebtoken')
const JWT_SECRET = "HappyJurny"

const fetchData = (req,res,next)=>{
     const token = req.header('auth-token') 
     if(!token){
        return res.status(401).json({error:'Please authenticate using a valid token'})
     }
      try {
        const data = jwt.verify(token,JWT_SECRET)
        req.room = data.room;
      } catch (error) {
        return res.send(401)
      }
    next()
}

module.exports = fetchData;