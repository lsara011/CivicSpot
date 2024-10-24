const express = require('express');
const User = require('../models/user');
const Report = require('../models/report');
const Comment = require('../models/comments');
const {addUser, getUser, deleteUser} = require('../Controllers/UserControllers')
const {addReport, deleteReport, getReport} = require("../Controllers/ReportControllers")
const {getComments, addComments} = require("../Controllers/CommentsController")
const router = express.Router(); // Use 'router' for better clarity

router.get('/user', getUser)

router.post('/user',  addUser);

router.delete('/user/:id', deleteUser )

router.patch("/user/:id", (req,res)=>{
    res.json({message: "Testing"})
})


router.get('/report', getReport )
router.post('/report', addReport)
router.delete('/report/:id', deleteReport)


router.get('/comments', getComments )
router.post('/comments', addComments)
module.exports = router;
