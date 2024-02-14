const {
  create,
  readOne,
  readAll,
} = require("../DL/controllers/campaign.controller");
const userController = require("../DL/controllers/user.controller");


// to get one campaigns - ASAF
let getOneCampaign = async (campaignId) => {
    let resulet = await readOne(campaignId);
    return resulet;
};


// to get all campaigns - ASAF
let getAllCampaign = async (userId) => {
//   let fond = await userController.readOne({userId: userId});
//   if (fond) {
    let resulet = await readAll(userId);
    return resulet;
//   }
//  else throw {msg: "cenot find this plees chek if you typ it good"};
};

const createCampaimg = async (data) => {
  const createCamp = await create(data);
  return createCamp;
};

module.exports = {
  createCampaimg,
  getAllCampaign,
  getOneCampaign,
};
