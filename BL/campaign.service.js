const { create, postMsg } = require("../DL/controllers/campaign.controller");

const createCampaimg = async (data) => {
    const createCamp = await create(data)
    return createCamp
}

const createMsg = async (msg,idCamp) => {
    const arrMsg = Object.keys(msg)
    if(arrMsg.length !== 2){ throw 'There is an error with the amount of keys' }
    for (v of arrMsg) {
        if (!(["content", "subject"].includes(v))) {
            throw 'There is an error with one of the keys'
        }
        if(!msg[v])throw 'error: One of the values ​​is empty'
}
    const result = await postMsg(msg,idCamp)
    return result
}


module.exports = { createCampaimg, createMsg }
