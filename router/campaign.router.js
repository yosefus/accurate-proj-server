const express = require("express");
const campaignService = require("../BL/campaign.service");
const router = express.Router()


router.post('/',(req,res)=>{
try {
    res.send(3)
} catch (error) {
    console.log(error);
    res.send(error)
}
})