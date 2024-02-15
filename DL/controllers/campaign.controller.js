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
  let resulet = await campaignModel.find({ user: userId });
  return resulet;
};

const create = async (data) => {
  const result = await campaignModel.create(data);
  console.log(result);
  return result;
};


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
 

// to put campaign name - ASAF
const PutController = async (campaignId, data) => {
 const result = await campaignModel.findOneAndUpdate(
   {_id: campaignId},
   {title: data.title, details: data.details},

   {
     new: true,
   }
 );
  // console.log(result);
  return result;
 
};
PutController("65cc7b9c238c212521568824", {title: "test", details: ""})
  // .then((res) => console.log(res));
module.exports = {
  PutController,
  findOneMsg,
  msgUpdate,
  create,
  update,
  readLead,
  readAll,
  readOne,
  postMsg
};
