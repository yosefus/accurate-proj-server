const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
  subject: {type: String, required: true},
  isActive: {type: Boolean, default: true},
  content: {type: String, required: true},
  creationDate: {type: Date, default: Date.now},
  status: {required: true, enum: ["sent", "draft"], default: "draft"},
  leads: [
    {
      lead: {type: mongoose.SchemaTypes.ObjectId, ref: "lead", required: true},
      receptionDate: {type: Date, default: Date.now},
      status: {required: true, enum: ["sent", "recived"], default: "sent"},
    },
  ],
});

const campSchema = new mongoose.Schema({
  // משתמש
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: true,
  },
  // כותרת
  title: {
    type: String,
    required: true,
  },
  // תוכן
  details: {
    type: String,
  },
  isActive: {type: Boolean, default: true},

  // לידים - מערך של אובייקטים
  leads: [
    {
      lead: {type: mongoose.SchemaTypes.ObjectId, ref: "lead"},
      isActive: {type: Boolean, default: true},
      joinDate: {type: Date, default: Date.now},
    },
  ],
  msg: [msgSchema],
});

const campaignModel = mongoose.model("campaign", campSchema);
module.exports = campaignModel;
