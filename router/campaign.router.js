const campaignService = require("../BL/campaign.service");
const express = require("express");
const router = express.Router();

// to get one campaigns - ASAF
router.get("/:campaignId",async (req, res) => {
  try {
    console.log(req.params.campaignId);
    let resulet = await campaignService.getOneCampaign(req.params.campaignId);
    res.send(resulet);
  } catch (error) {
    res
      .status(error.code || 500)
      .json({message: error.msg || " we cent campaign one"});
  }
});


// to get all campaigns - ASAF
router.get("/", async (req, res) => {
  try {
    let resulet = await campaignService.getAllCampaign(req.body.user._id);
    res.send(resulet);
  } catch (error) {
    res
      .status(error.code || 500)
      .json({message: error.msg || " we cent campaign all"});
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



  router.put("/add-lead/:idCampaign", async (req, res) => {
    try {
      const result = await  campaignService.updateCampaign (req.params.idCampaign, req.body)
      res.send(result)
    } catch (error) {
      res
        .status(error.code || 500)
        .json({ message: error.msg || " we  update read one" });
    }
  });


  router.post('/:id/newMsg',async(req,res)=>{
try {
  let msg = await campaignService.createMsg(req.body,req.params.id)
  res.send(msg)
} catch (error) {
  console.log(error);
  res.send(error)
}
  })


  router.delete('/massege/:campaignId/:MsgId',async(req,res)=>{
    try {
      let msg = await campaignService.deleteMassega( req.params.campaignId, req.params.MsgId )
      res.send(msg)
    } catch (error) {
      console.log(error);
      res.send(error)
    }
      })


  module.exports = router;
