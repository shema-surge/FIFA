const mongoose = require('mongoose')

const transferSchema = mongoose.Schema({
    player:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'player',
        required:true
    },
    formerClub:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'club',
        required:true
    },
    newClub:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'club',
        required:true
    }
})

module.exports = mongoose.model('transfer',transferSchema)