const campaignModel = require("../models/campaign.model");
const leadModel = require("../models/lead.model");

// to get one campaigns - ASAF
let readOne = async (campaignId) => {
  let resulet = await campaignModel
    .findOne({_id: campaignId})
    .populate("leads.lead");
  return resulet;
};

// to get all campaigns - ASAF
let readAll = async (userId) => {
  let resulet = await campaignModel.find({user: userId});
  return resulet;
};

const create = async (data) => {
  const result = await campaignModel.create(data);
  console.log(result);
  return result;
};

const update = async (campaign, newData) => {
  const result = await campaignModel.findOneAndUpdate(campaign, newData, {
    new: true,
  });
  console.log(result);
  return result;
};

const readLead = async (filter) => {
  const result = await leadModel.findOne(filter);
  console.log(result);
  return result;
};

// to find one msg by msgId - ASAF
let findOneMsg = async (msgId) => {
  let resulet = await campaignModel.findOne({"msg._id": msgId});
  return resulet;
};

// to get Update msg - ASAF
const msgUpdate = async (msgId, newData) => {
  const result = await campaignModel.findOneAndUpdate(
    {"msg._id": msgId},
    {
      $set: {
        "msg.$.subject": newData.subject,
        "msg.$.content": newData.content,
      },
    },
    {
      new: true,
    }
  );
  return result;
};

module.exports = {
  findOneMsg,
  msgUpdate,
  create,
  update,
  readLead,
  readAll,
  readOne,
};
