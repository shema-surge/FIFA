const { asyncHandler } = require("../middlewares/asyncHandler")
const { NotFound } = require('http-errors')
const club = require("../models/club")

function saveClub(){
    return asyncHandler(async (req,res,next)=>{
        const newRecord = await new club(req.body).save()
        res.json({data:newRecord})
    })
}

function getClubs(){
    return asyncHandler(async (req,res,next)=>{
        const records = await club.find()
        res.json({data:records})
    })
}

function getClub(){
    return asyncHandler(async (req,res,next)=>{
        const record = await club.findById(req.params.id)
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}

function updateClub(){
    return asyncHandler(async (req,res,next)=>{
        const record = await club.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}

function deleteClub(){
    return asyncHandler(async (req,res,next)=>{
        const record = await club.findByIdAndDelete(req.params.id)
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}

module.exports = {getClubs,getClub,saveClub,updateClub,deleteClub}