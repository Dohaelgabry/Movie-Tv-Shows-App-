const mongoose = require('mongoose')
const registerSchema = new mongoose.Schema({
     first_name: { type: String},
     last_name: { type: String},
     Email: { type: String},
     password: { type: String},
     age: { type: Number},
});

const registerModel = mongoose.model('register', registerSchema);
module.exports = registerModel;
