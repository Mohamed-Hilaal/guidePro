const express = require('express')
const router = express.Router()
const User = require('../Models/User')


router.get("/", (req, res)=>{
    res.json({places: "Saudi Arabia"})
})



router.post('/createUser', async (req, res) =>{
    try{
        const { userEmail } = req.body.data 
        const user = new User({
            userName: userEmail
        })

        await user.save()

        res.status(200).json({
            message : "User Created Successfully"
        })
        
    }catch(err){
        console.log("Failed to create user record : ", err)
        res.status(500).json({
            message : "Failed to create user record"
        })
    }
})
module.exports = router