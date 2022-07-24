const mongoose = require('mongoose')
const Url = 'mongodb://localhost:27017/boardInfinity'
const ConnectMongo = ()=>{
           mongoose.connect(Url,()=>{
            console.log('Database is succesfully connected')
           })
}


module.exports = ConnectMongo