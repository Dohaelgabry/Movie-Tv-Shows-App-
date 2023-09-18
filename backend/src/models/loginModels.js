const mongoose= require('mongoose')
const loginSchema=new mongoose.Schema({
     Email: { type: String },
     password: { type: String },
   
});

const loginModel = mongoose.model('login', loginSchema);
module.exports = loginModel;
