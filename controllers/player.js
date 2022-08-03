const { asyncHandler } = require("../middlewares/asyncHandler")
const { BadRequest,NotFound} = require('http-errors')
const player = require("../models/player")

function savePlayer(){
    return asyncHandler(async (req,res,next)=>{
        const newRecord = await player(req.body).save()
        await newRecord.populate('playsAt')
        res.json({data:newRecord})
    })
}

function getPlayers(){
    return asyncHandler(async (req,res,next)=>{
        const records = await player.find().populate('playsAt')
        if(!records) throw new NotFound('No records Found')
        res.json({data:records})
    })
}

function getPlayer(){
    return asyncHandler(async (req,res,next)=>{
        const record = await player.findById(req.params.id).populate('playsAt')
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}

function updatePlayer(){
    return asyncHandler(async (req,res,next)=>{
        const record = await player.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}

function deletePlayer(){
    return asyncHandler(async (req,res,next)=>{
        const record = await player.findByIdAndDelete(req.params.id)
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}


module.exports = { savePlayer,getPlayers,getPlayer,updatePlayer,deletePlayer } 