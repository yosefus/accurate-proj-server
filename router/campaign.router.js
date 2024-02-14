const {createCampaimg} = require("../BL/campaign.service");


const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
    try {
      
      console.log(req.body);
      const result = await createCampaimg(req.body)
      res.send(result)
    } catch (error) {
      res
        .status(error.code || 500)
        .json({ message: error.msg || " we  post read one" });
    }
  });


  module.exports = router;
