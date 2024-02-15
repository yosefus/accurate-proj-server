const {connect} = require("../db");
const leadModel = require("../models/lead.model");

const create = async (data) => {
  const result = await leadModel.create(data);
  console.log(result);
  return result;
};

const read = async (filter) => {
  const result = await leadModel.find(filter);
  console.log(result);
  return result;
};

const readOne = async (filter) => {
  const result = await leadModel.findOne(filter);
  console.log(result);
  return result;
};

const update = async (filter, newdata) => {
  const result = await leadModel.findOneAndUpdate(filter, newdata, {new: true});
  console.log(result);
  return result;
};

const deleted = async (filter) => {
  const result = await leadModel.findOneAndUpdate(
    filter,
    {isActive: false},
    {new: true}
  );
  return result;
};



// connect().then(async()=>{
//     const result = await readOne( {_id: '65cb6f546b79d4910a4c24df'} )
//     console.log(result);
// })

module.exports = {create, readOne, read, update, deleted};
