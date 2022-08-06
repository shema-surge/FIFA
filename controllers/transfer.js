const { asyncHandler } = require("../middlewares/asyncHandler")
const { BadRequest,NotFound } = require('http-errors')
const transfer = require("../models/transfer")
const player = require("../models/player")

function saveTransfer(){
    return asyncHandler(async (req,res,next)=>{
        const currentClub = await player.findById(req.body.player)
        const newRecord = await new transfer({player:req.body.player,formerClub:currentClub.playsAt,newClub:req.body.newClub}).save()
        await newRecord.populate('player')
        await newRecord.populate('formerClub')
        await newRecord.populate('newClub')
        const updatedRecord = await player.findByIdAndUpdate(req.body.player,{playsAt:req.body.newClub},{new:true})
        res.json({data:newRecord,updated:updatedRecord})
    })
}

function getTransfers(){
    return asyncHandler(async (req,res,next)=>{
        const records = await transfer.find().populate('player').populate('formerClub').populate('newClub')
        if(!records) throw new NotFound(`No records found`)
        res.json({data:records})
    })
}

function getTransfer(){
    return asyncHandler(async (req,res,next)=>{
        const record = await transfer.findById(req.params.id)
        await record.populate('player')
        await record.populate('formerClub')
        await record.populate('newClub')
        if(!record) throw new NotFound(`No record with ${req.params.id} was found`)
        res.json({data:record})
    })
}

module.exports = { getTransfers,getTransfer,saveTransfer}