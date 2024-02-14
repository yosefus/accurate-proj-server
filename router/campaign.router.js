const campaignService = require("../BL/campaign.service");

const express = require("express");
const router = express.Router();

// to get all campaigns
router.get("/", (req, res) => {
  try {
    let resulet = campaignService.getAllCampaignFromService(req.body.user._id);
    res.send(resulet);
  } catch (error) {
    res
      .status(error.code || 500)
      .json({message: error.msg || " we cent campaign one"});
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await campaignService.createCampaimg(req.body);
    res.send(result);
  } catch (error) {
    res
      .status(error.code || 500)
      .json({message: error.msg || " we  post read one"});
  }
});

module.exports = router;
