const registerControl=require('../controllers/registerController');
const express = require("express")
const route = express.Router();


route.post("/", async function (req, res) {
     console.log('userDetails')
     const userDetails = await registerControl.register_new_user(req.body)
     res.send({message:userDetails})
     
})


// route.post("/", registerControl.register_new_user)



module.exports = route;