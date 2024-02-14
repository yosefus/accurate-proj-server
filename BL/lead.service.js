
const {
  create,
  update,
  readOne,
  deleted,
} = require("../DL/controllers/lead.controller");

const createOneLead = async (lead) => { 
    
    if (!lead.Fname || !lead.Lname || !lead.email || !lead.phone  ){
        throw {msg: 'אנא מלא את כל שדות החובה'}
        }

        const exist = await readOne({phone: lead.phone})
        if(exist) return exist

     else{
         const creatLead =  await create (lead)
         return creatLead
     }
     }       
    

    const updateLead = async (idLead, newLead) =>{
    const updatedLead =   await update ({_id: idLead}, newLead)
        return updatedLead
    
    }

    const deleteService = async (idLead) => {
      const updatedLead = await deleted({_id: idLead});
      return updatedLead;
    };

 module.exports = {createOneLead, updateLead, deleteService};