const loginModel =require('../models/loginModels');

async function login_user(email) {
     email = email.toLowerCase();
     // console.log(email)
     let existed_user_data = await userModel.findOne({ email: email })
     return existed_user_data;

}

module.exports = { login_user }