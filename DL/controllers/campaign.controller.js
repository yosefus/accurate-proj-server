const { connect } = require("../db");
const campaignModel = require("../models/campaign.model");

const create = async (data) => {
const result = await campaignModel.create(data)
console.log(result);
return result
}


module.exports ={create}