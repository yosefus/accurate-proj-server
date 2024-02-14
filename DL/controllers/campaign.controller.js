const campaignModel = require("../models/campaign.model");

// to get one campaigns - ASAF
let readOne = async (campaignId) => {
  let resulet = await campaignModel.find({_id: campaignId});
  return resulet;
};

// to get all campaigns - ASAF
let readAll = async (userId) => {
  let resulet = await campaignModel.find({user: userId});
  return resulet;
};

const create = async (data) => {
    const result = await campaignModel.create(data)
    console.log(result);
    return result
}


module.exports = {
  create,
  readAll,
  readOne,
};
