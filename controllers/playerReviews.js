const {NotFound} = require('http-errors')

const { asyncHandler } = require("../middlewares/asyncHandler");
const playerReviews = require("../models/playerReviews");

function savePlayerReview(){
    return asyncHandler( async(req,res)=>{
        const record = await new playerReviews(req.body).save()
        await record.populate('player')
        res.json(record)
    })
}

function getPlayerReviews(){
    return asyncHandler( async(req,res)=>{
        const record = await new playerReviews.find().populate('player')
        if(!record) throw new NotFound(`No records found`)
        res.json(record)
    })
}

function getPlayerReview(){
    return asyncHandler(async (req,res,next)=>{
        const record = await playerReviews.findById(req.params.id)
        await record.populate('player')
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}

function editPlayerReview(){
    return asyncHandler( async(req,res)=>{
        const record = await playerReviews.findByIdAndUpdate(req.params.id,req.body,{new:true})
        await record.populate('player')
        res.json(record)
    })
}

function deletePlayerReview(){
    return asyncHandler(async (req,res,next)=>{
        const record = await playerReviews.findByIdAndDelete(req.params.id)
        await record.populate('player')
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}

module.exports = { savePlayerReview,getPlayerReviews,getPlayerReview,editPlayerReview,deletePlayerReview } 
