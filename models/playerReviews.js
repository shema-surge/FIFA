const mongoose = require('mongoose')

const playerReviewSchema = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    player:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'player',
        required:true
    }
})

module.exports = mongoose.model('playerReview',playerReviewSchema)