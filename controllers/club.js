const { asyncHandler } = require("../middlewares/asyncHandler")
const { BadRequest,NotFound } = require('http-errors')
const club = require("../models/club")

function saveClub(){
    return asyncHandler(async (req,res,next)=>{
        const newRecord = await new club(req.body).save()
        res.status(201).json({data:newRecord})
    })
}

function getClubs(){
    return asyncHandler(async (req,res,next)=>{
        const records = await club.find()
        res.status(201).json({data:records})
    })
}

function getClub(){
    return asyncHandler(async (req,res,next)=>{
        if(!req.params.id){
            throw new BadRequest('Please provide a valid Object_id')
        }
        const record = await club.findById(req.params.id)
        if(!record){
            throw new NotFound(`No record with ${req.params.id} was found`)
        }
        res.status(200).json({data:record})
    })
}

function updateClub(){
    return asyncHandler(async (req,res,next)=>{
        if(!req.params.id){
            throw new BadRequest('Please provide a valid Object_id')
        }
        if(!getModel()){
            throw new NotFound(`No record with ${req.params.id} was found`)
        }
        const record = await club.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({data:record})
    })
}

function deleteClub(){
    return asyncHandler(async (req,res,next)=>{
        if(!req.params.id){
            throw new BadRequest('Please provide a valid Object_id')
        }
        const record = await club.findByIdAndDelete(req.params.id)
        if(!record){
            throw new NotFound(`No record with ${req.params.id} was found`)
        }
        res.status(200).json({data:record})
    })
}

module.exports = {getClubs,getClub,saveClub,updateClub,deleteClub}