const User = require("../models/user");
const Report = require("../models/report");
const Comments = require("../models/comments");
const { Types } = require("mongoose");

const getComments = async (req, res) => {
  try {
    const comments = await Comments.find({})
      .sort({ createdAt: -1 })
      .populate("report")
      .populate("user");

    if (comments.length === 0) {
      return res.status(200).json({ message: "No comments.." });
    }

    res.status(200).json(comments);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Comments not found" });
  }
};

const addComments = async (req, res) => {
  const { report, user, text, createdAt } = req.body;

  try {
    const user_report = await Report.findOne({ report: report._id });
    const user_name = await User.findOne({ username: user });
    if (!Types.ObjectId.isValid(report) || !Types.ObjectId.isValid(user)) {
      return res
        .status(400)
        .json({ error: "Please double-check report and user IDs" });
    }
    const newComment = new Comments({
      report,
      user,
      text,
      createdAt,
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add comment" });
  }
};

const deleteComments = async (req,res) => {
    const { id } = req.params
    if(!Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Comment no longer exists'})
    }

    
}

module.exports = { getComments, addComments };
