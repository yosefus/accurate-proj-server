const {create} = require("../DL/controllers/campaign.controller");
const campaignController = require("../DL/controllers/campaign.controller");
const {readOne} = require("../DL/controllers/user.controller");

let getAllCampaignFromService = async (userId) => {
  let fond = await readOne(userId);
  if (fond) {
    let resulet = await getAllCampaignFromController(userId);
    return resulet;
  }
 else throw {msg: "cenot find this plees chek if you typ it good"};
};

const createCampaimg = async (data) => {
  const createCamp = await create(data);
  return createCamp;
};

module.exports = {createCampaimg, getAllCampaignFromService};
