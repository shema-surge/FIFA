const mongoose = require('mongoose')

const clubReviewSchema = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    club:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'club',
        required:true
    }
})

module.exports = mongoose.model('clubReview',clubReviewSchema)