const { create, update, readLead } = require("../DL/controllers/campaign.controller");

const createCampaign = async (campaign) => {
    if (!campaign.user || !campaign.title) {
        throw { msg: 'אנא מלא את כל שדות החובה' }
    }

    const createCamp = await create(campaign)
    return createCamp
}

const updateCampaign = async (idCampaign, Lead) => {

    if (!Lead.lead) throw {msg: 'אנא הוסף את פרטי הליד'}

    const addNew = {lead: Lead.lead }

    const exist = await readLead({_id: Lead.lead})
    if(!exist) throw {msg: 'הליד הזה לא קיים'}

    const upCamp = await update({ _id: idCampaign }, {$push: {leads:addNew}} )
    return upCamp
}

module.exports = { createCampaign, updateCampaign }
