const {createCampaign, updateCampaign} = require("../BL/campaign.service");


const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
    try {
      
      console.log(req.body);
      const result = await createCampaign(req.body)
      res.send(result)
    } catch (error) {
      res
        .status(error.code || 500)
        .json({ message: error.msg || " we  post read one" });
    }
  });



  router.put("/add-lead/:idCampaign", async (req, res) => {
    try {
      const result = await  updateCampaign (req.params.idCampaign, req.body)
      res.send(result)
    } catch (error) {
      res
        .status(error.code || 500)
        .json({ message: error.msg || " we  update read one" });
    }
  });


  module.exports = router;
