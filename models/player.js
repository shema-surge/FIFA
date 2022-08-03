const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    playsAt:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'club',
        required:true
    },
    nationality:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('player',playerSchema)