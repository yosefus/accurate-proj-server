const campaignModel = require("../models/campaign.model");

let getAllCampaignFromController = async (userId) => {
  let resulet = await campaignModel.find({user: userId});
  return resulet;
};
module.exports = {getAllCampaignFromController};
