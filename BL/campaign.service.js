const fromleadPayg = require("../BL/lead.service");
const {
  msgUpdate,
  create,
  readOne,
  readAll,
  update,
  readLead,
  postMsg,
  PutController,
} = require("../DL/controllers/campaign.controller");
const userController = require("../DL/controllers/user.controller");

const createCampaign = async (campaign) => {
  if (!campaign.user || !campaign.title) {
    throw {msg: "אנא מלא את כל שדות החובה"};
  }
  const createCamp = await create(campaign);
  return createCamp;
};

const createMsg = async (msg, idCamp) => {
  const arrMsg = Object.keys(msg);
  if (arrMsg.length !== 2) {
    throw "There is an error with the amount of keys";
  }
  for (v of arrMsg) {
    if (!["content", "subject"].includes(v)) {
      throw "There is an error with one of the keys";
    }
    if (!msg[v]) throw "error: One of the values ​​is empty";
  }
  const result = await postMsg(msg, idCamp);
  return result;
};

const deleteMassega = async (idCamp, idMsg) => {
  const result = await update(
    {_id: idCamp, "msg._id": idMsg},
    {$set: {"msg.$.isActive": false}}
  );
  return result;
};

const updateCampaign = async (idCampaign, Lead) => {
  if (!Lead.lead) throw {msg: "אנא הוסף את פרטי הליד"};

  const addNew = {lead: Lead.lead};

  const exist = await readLead({_id: Lead.lead});
  if (!exist) throw {msg: "הליד הזה לא קיים"};

  const upCamp = await update({_id: idCampaign}, {$push: {leads: addNew}});
  return upCamp;
};

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

// to get  msg - ASAF
const msgFindOneService = async (filter) => {
  const resulet = await findOneMsg(filter);
  return resulet;
};

// to get Update msg - ASAF- need to get subject + content
const msgUpdateService = async (msgId, data) => {
  const resulet = await msgUpdate(msgId, data);
  return resulet;
};

// to put campaign name - ASAF
const PutSevice = async (campaignId, data) => {
  const resulet = await PutController(campaignId, data);
  return resulet;
};

// to creat kead in campaign - ASAF
const createCampaignLeadservice = async (campId, body) => {
 const theObg = await fromleadPayg.createOneLead(body);
  const resulet = await updateCampaign(campId,{...theObg, lead: theObg._id});
  return resulet;
};



let newLead={Fname: 'ASAF', Lname: 'ASHWAL', email: "ashwalasafx@gmail.com", phone:"0523334444"}
// createCampaignLeadservice("65cc7b9c238c212521568824", newLead)
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e.message));

module.exports = {
  createCampaignLeadservice,
  PutSevice,
  msgFindOneService,
  msgUpdateService,
  createMsg,
  createCampaign,
  updateCampaign,
  getOneCampaign,
  getAllCampaign,
  deleteMassega,
};
