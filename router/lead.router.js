// const leadService = require("../BL/lead.service");
const {createOneLead, updateLead, deleteService} = require ("../BL/lead.service");

const express = require("express");
const router = express.Router();

// to get all leads
router.get("/", (req, res) => {
  try {
    res.send("to read leads");
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.msg || " we cent read one" });
  }
});

// to get one lead
router.get("/:id", async (req, res) => {
  try {
    res.send(`u read one lead ${req.params.id}`);
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.msg || " we  cent read one" });
  }
});

// to post one lead
router.post("/", async (req, res) => {
  try {
    
    console.log(req.body);
    const result = await createOneLead(req.body)
    res.send(result)
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.msg || " we  post read one" });
  }
});

// to update one lead
router.put("/:_id", async (req, res) => {
  try {
    const result = await  updateLead (req.params._id, req.body)
    res.send(result)
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.msg || " we  update read one" });
  }
});

// to delete one lead
router.delete("/:_id",async (req, res) => {
  try {
    let result = await deleteService(req.params._id);
    res.send(result);
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.msg || " we  delete read one" });
  }
});

module.exports = router;
