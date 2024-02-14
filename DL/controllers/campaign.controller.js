const { connect } = require("../db");
const campaignModel = require("../models/campaign.model");

const create = async (data) => {
const result = await campaignModel.create(data)
console.log(result);
return result
}
const postMsg = async(message,idCamp) =>{
  const campaign = await campaignModel.findById(idCamp)
  if (!campaign) throw "error: not found"
  campaign?.msg?.push?.(message)
  campaign?.save?.()
return "ok"
}


module.exports ={create,postMsg}