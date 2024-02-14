const { connect } = require("../db");
const campaignModel = require("../models/campaign.model");

const create = async (data) => {
const result = await campaignModel.create(data)
console.log(result);
return result
}

connect().then(async()=>{
    const result = await create( {user: '65c33dc58a4b7bf8aea86b09', title: 'fullstack'} )
    console.log(result);
})



module.exports ={create}