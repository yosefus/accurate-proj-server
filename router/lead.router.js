// const leadService = require("../BL/lead.service");
const {createOneLead, updateLead} = require ("../BL/lead.service");

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
router.put("/:id", async (req, res) => {
  try {
    const result = await  updateLead (req.params.id, req.body)
    res.send(result)
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.msg || " we  update read one" });
  }
});

router.delete("/:id", (req, res) => {
  try {
    res.send("u try to delete one lead");
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.msg || " we  delete read one" });
  }
});

module.exports = router;
