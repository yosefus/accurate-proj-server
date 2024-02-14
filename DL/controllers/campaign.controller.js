const campaignModel = require("../models/campaign.model");
const leadModel = require("../models/lead.model");

// to get one campaigns - ASAF
let readOne = async (campaignId) => {
  let resulet = await campaignModel.find({ _id: campaignId });
  return resulet;
};

// to get all campaigns - ASAF
let readAll = async (userId) => {
  let resulet = await campaignModel.find({ user: userId });
  return resulet;
};

const create = async (data) => {
  const result = await campaignModel.create(data)
  console.log(result);
  return result
}
const postMsg = async (message, idCamp) => {
  const campaign = await campaignModel.findById(idCamp)
  if (!campaign) throw "error: not found"
  campaign?.msg?.push?.(message)
  campaign?.save?.()
  return "ok"
}


const update = async (campaign, newData) => {
  const result = await campaignModel.findOneAndUpdate(campaign, newData, { new: true })
  console.log(result);
  return result
}

const readLead = async (filter) => {
  const result = await leadModel.findOne(filter)
  console.log(result);
  return result
}



module.exports = { create, update, readLead, readAll, readOne, postMsg }
