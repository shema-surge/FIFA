const express = require('express')
const dotenv = require('dotenv')
const { connectToDb } = require('./utils/connectToMongo')

const app = express()
dotenv.config()
connectToDb()

app.use(express.json())
app.use('/club',require('./routes/club'))
app.use('/player',require('./routes/player'))

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})