const userModel = require("../models/user.model");

const create = async (data) => {
    const result = await userModel.create(data)
    console.log(result);
    return result
}

const read = async (filter) => {
    const result = await userModel.find(filter)
    console.log(result);
    return result
}

const readOne = async (filter) => {
    const result = await userModel.findOne(filter)
    console.log(result);
    return result
}

const updateOne = async (filter, newData) => {
    const result = await userModel.findOneAndUpdate(filter, newData, { new: true })
    console.log(result);
    return result
}

const deleteOne = async (filter, isActive) => {
    const result = await userModel.findOneAndUpdate(filter, { isActive: false })
    console.log(result);
    return result
}


module.exports = { create, deleteOne, updateOne, readOne, read }