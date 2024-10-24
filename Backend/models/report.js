const mongoose = require("mongoose");
const Schema = mongoose.Schema
const reportSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  category: {
    type: String,
    enum: ["Roads", "Lighting", "Sanitation", "Traffic", "Other"],
    required: true,
  },
  address: { type: String, required: true },
  status: {
    type: String,
    enum: ["Reported", "In Progress", "Resolved"],
    default: "Reported",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('Report', reportSchema);