const express = require("express")
const router = express.Router()
const CandidateDetails = require("../models/candidateDetails")
const passport = require('passport')

router.get("/candidates/:id",passport.authenticate("jwt", {session:false}), async(req,res)=>{
    try{
        console.log(typeof req.params.id)
        candidate = await CandidateDetails.findById(req.params.id)
        console.log(candidate)
        res.send(candidate)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

router.get("/candidates", passport.authenticate("jwt", {session : false}), async(req,res)=>{
    try{
        
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router