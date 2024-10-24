const mongoose = require("mongoose");
const Schema = mongoose.Schema
const commentSchema = new Schema({
  report: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Report",
    required: [true, "Report is required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  text: {
    type: String,
    required: [true, "Comment text is required"],
    minlength: [1, "Comment cannot be empty"],
    maxlength: [500, "Comment cannot exceed 500 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comments", commentSchema)