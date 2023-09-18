const registerModel=require('../models/registerModels');
const fs = require("fs");

// ******* Register *********
async function register_new_user(user_data) {
      console.log('Dohaaaaaa')
      let new_user = await registerModel.find({ Email: user_data.email })

      

      if (new_user.length == 0){
            let save_Data = new registerModel({
                  first_name: user_data.first_name ,
                  last_name: user_data.last_name,
                  Email: user_data.email,
                  password: user_data.password,
                  age: user_data.age, 
            })  
      try{
            save_Data = await save_Data.save()
            return "user saved"
      } catch (e){
            console.log(e)
      }

      } else{
            return "User Already Exist"
      }
      
}




// let register_new_user = async (req, res) =>  {
//       console.log('Donnnnnne')
//       let new_user = await registerModel.find({ Email: req.body.email })


//       if (new_user.length == 0) {
//             let save_Data = new registerModel({
//                   first_name: req.body.first_name,
//                   last_name: req.body.last_name,
//                   Email: req.body.email,
//                   password: req.body.password,
//                   age: req.body.age,
//             })
//             try {
//                   save_Data = await save_Data.save()
//                   res.send ("user saved")
//             } catch (e) {
//                   console.log(e)
//             }

//       } else {
//             res.send ("User Already Exist")
//       }

// }
module.exports = { register_new_user }