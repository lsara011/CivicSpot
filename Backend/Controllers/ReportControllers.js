const Report = require("../models/report");
const User = require("../models/user")
const {Types} = require("mongoose")

const getReport = async (req, res) => {
  try {
    const report = await Report.find({}).sort({ createdAt: -1 });
    if(report.length === 0){
        return res.status(200).json({message: "No reports yet..."})
    }
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const addReport = async (req, res) => {
  const { title, desc, category, address, status, user, createdAt} = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!desc) {
    emptyFields.push("desc");
  }

  if (!category) {
    emptyFields.push("category");
  }

  if (!address) {
    emptyFields.push("address");
  }

  if (!status) {
    emptyFields.push("status");
  }

  if (!user) {
    emptyFields.push("user");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const user_name = await User.findOne({username: user});
    if (!user_name) {
      return res.status(400).json({ error: "User not found" });
    }

    const report = await Report.create({
      title,
      desc,
      category,
      address,
      status,
      user: user_name._id,  
      createdAt
    });

    res.status(200).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deleteReport = async (req,res) =>{
    const { id } = req.params
    if(!Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Report does not exist'})
    }

    try {
        const report = await Report.findOneAndDelete({ _id: id });

        if (!report) {
            return res.status(404).json({ error: 'Report does not exist' });
        }
        res.status(200).json(report);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = { getReport, addReport, deleteReport,  };
