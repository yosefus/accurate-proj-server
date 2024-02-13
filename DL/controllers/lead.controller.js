const leadModel = require("../models/lead.model");


const create = async (data) => {
    const result = await leadModel.create(data)
    console.log(result);
    return result
}

const read = async (filter) => {
    const result = await leadModel.find(filter)
    console.log(result);
    return result
}

const readOne = async (filter) => {
    const result = await leadModel.findOne(filter)
    console.log(result);
    return result
}

const update = async (filter, newdata) => {
    const result = await leadModel.findOneAndUpdate(filter, newdata, {new: true})
    console.log(result);
    return result
}

const deleteLead = async (filter) => {
    const result = await leadModel.findOneAndUpdate({_id:filter}, {isAktive: false} , {new: true})
    console.log(result);
    return result
}

module.exports = {create, readOne, read, update, deleteLead }