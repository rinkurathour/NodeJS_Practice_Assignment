const express = require('express')
const app = express()
const port = 5000;
const ConnectMongo = require('./database')
app.use(express.json())

app.use('/api',require('./router/allroom'))
app.use('/api',require('./router/customer'))
ConnectMongo()
app.listen(port,()=>{
    console.log(`app is successfully running on port ${port}`)
})