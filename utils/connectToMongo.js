const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('Connected To Mongo')}).catch((err)=>{console.error(err)})
}

module.exports = {connectToDb}