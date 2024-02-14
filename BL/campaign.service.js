const {create} = require("../DL/controllers/campaign.controller");

const createCampaimg = async (data) =>{
    const createCamp = await create(data)
    return createCamp
}


module.exports = {createCampaimg}
