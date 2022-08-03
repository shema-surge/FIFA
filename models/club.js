const mongoose = require('mongoose')

const clubSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('club',clubSchema)