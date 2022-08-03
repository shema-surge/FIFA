const { asyncHandler } = require("../middlewares/asyncHandler")
const { BadRequest,NotFound } = require('http-errors')
const clubReviews = require("../models/clubReviews")

function saveClubReview(){
    return asyncHandler(async (req,res,next)=>{
        const newRecord = await new clubReviews(req.body).save()
        await newRecord.populate('club')
        res.json({data:newRecord})
    })
}

function getClubReviews(){
    return asyncHandler(async (req,res,next)=>{
        const records = await clubReviews.find().populate('club')
        if(!records) throw new NotFound(`No records found`)
        res.json({data:records})
    })
}

function getClubReview(){
    return asyncHandler(async (req,res,next)=>{
        const record = await clubReviews.findById(req.params.id)
        await record.populate('club')
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}

function updateClubReview(){
    return asyncHandler(async (req,res,next)=>{
        const record = await clubReviews.findByIdAndUpdate(req.params.id,req.body,{new:true})
        await record.populate('club')
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}

function deleteClubReview(){
    return asyncHandler(async (req,res,next)=>{
        const record = await clubReviews.findByIdAndDelete(req.params.id)
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}

module.exports = {getClubReviews,getClubReview,saveClubReview,updateClubReview,deleteClubReview}