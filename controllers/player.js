const { asyncHandler } = require("../middlewares/asyncHandler")
const { BadRequest,NotFound} = require('http-errors')
const player = require("../models/player")

function savePlayer(){
    return asyncHandler(async (req,res,next)=>{
        const newRecord = await (await new player(req.body).save()).populate('playsAt')
        res.status(201).json({data:newRecord})
    })
}

function getPlayers(){
    return asyncHandler(async (req,res,next)=>{
        const records = await player.find().populate('playsAt')
        res.status(201).json({data:records})
    })
}

function getPlayer(){
    return asyncHandler(async (req,res,next)=>{
        if(!req.params.id){
            throw new BadRequest('Please provide a valid Object_id')
        }
        const record = await player.findById(req.params.id).populate('playsAt')
        if(!record){
            throw new NotFound(`No record with ${req.params.id} was found`)
        }
        res.status(200).json({data:record})
    })
}

function updatePlayer(){
    return asyncHandler(async (req,res,next)=>{
        if(!req.params.id){
            throw new BadRequest('Please provide a valid Object_id')
        }
        if(!getModel()){
            throw new NotFound(`No record with ${req.params.id} was found`)
        }
        const record = await player.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({data:record})
    })
}

function deletePlayer(){
    return asyncHandler(async (req,res,next)=>{
        if(!req.params.id){
            throw new BadRequest('Please provide a valid Object_id')
        }
        const record = await player.findByIdAndDelete(req.params.id)
        if(!record){
            throw new NotFound(`No record with ${req.params.id} was found`)
        }
        res.status(200).json({data:record})
    })
}


module.exports = { savePlayer,getPlayers,getPlayer,updatePlayer,deletePlayer } 