const campaignModel = require("../models/campaign.model");

let getAllCampaignFromController = async (userId) => {
  let resulet = await campaignModel.find({user: userId});
  return resulet;
};

const create = async (data) => {
    const result = await campaignModel.create(data)
    console.log(result);
    return result
}


module.exports = {create, getAllCampaignFromController};
