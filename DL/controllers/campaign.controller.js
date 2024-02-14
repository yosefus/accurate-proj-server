const campaignModel = require("../models/campaign.model");
const leadModel = require("../models/lead.model");

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


const update = async (campaign, newData) => {
    const result = await campaignModel.findOneAndUpdate(campaign, newData, {new: true})
    console.log(result);
    return result
}

const readLead = async (filter) => {
    const result = await leadModel.findOne(filter)
    console.log(result);
    return result
}



module.exports ={create, update, readLead ,   readAll,  readOne}
