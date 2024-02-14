const { connect } = require("../db");
const campaignModel = require("../models/campaign.model");
const leadModel = require("../models/lead.model");

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

// connect().then(async()=>{
//     const result = await create( {user: '65c33dc58a4b7bf8aea86b09', title: 'fullstack'} )
//     console.log(result);
// })



module.exports ={create, update, readLead}