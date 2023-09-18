const express = require("express")
const route = express.Router();
const registerControl = require('../controllers/registerController');

route.post("/", async function (req, res) {

     let data_of_login_user = await userController.login_user(req.body.email)
     // console.log(data_of_login_user);

     res.send(data_of_login_user)

})
module.exports=route;