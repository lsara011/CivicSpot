const { find, findById, create, findOneAndDelete, findOneAndUpdate } = require('../models/user');
const { Types } = require('mongoose');
const User = require("../models/user")
const getUser = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 }); // Use User model correctly
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

const addUser = async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        const savedUser = await newUser.save();
        res.status(201).json({ success: true, user: savedUser });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

const deleteUser = async (req,res)=>{
    const { id } = req.params
    if(!Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'User does not exist'})
    }

    try {
        const user = await User.findOneAndDelete({ _id: id });

        if (!user) {
            return res.status(404).json({ error: 'User does not exist' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = { getUser, addUser,deleteUser };