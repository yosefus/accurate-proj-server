const campaignModel = require("../models/campaign.model");
const leadModel = require("../models/lead.model");

// to get one campaigns - ASAF
let readOne = async (campaignId) => {
<<<<<<< HEAD
  let resulet = await campaignModel
    .findOne({_id: campaignId})
    .populate("leads.lead");
=======
  let resulet = await campaignModel.find({ _id: campaignId });
>>>>>>> 294069b9867267e275b47c95cf388165aa48077a
  return resulet;
};

// to get all campaigns - ASAF
let readAll = async (userId) => {
  let resulet = await campaignModel.find({ user: userId });
  return resulet;
};

const create = async (data) => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 294069b9867267e275b47c95cf388165aa48077a

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

<<<<<<< HEAD
module.exports = {
  findOneMsg,
  msgUpdate,
  create,
  update,
  readLead,
  readAll,
  readOne,
};
=======
module.exports = { create, update, readLead, readAll, readOne, postMsg }
>>>>>>> 294069b9867267e275b47c95cf388165aa48077a
