const campaignController = require("../DL/controllers/campaign.controller");
const {readOne} = require("./user.controller");


let getAllCampaignFromService = async (userId) => {
  if (readOne(userId)) {
    let resulet = await getAllCampaignFromController(userId);
    return resulet;
  }
throw {msg: "cenot find this plees chek if you typ it good"};
};

module.exports = {getAllCampaignFromService};
