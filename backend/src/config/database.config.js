const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const dbConnect=()=> {
     mongoose.connect(process.env.MONGO_URL, {
          useUnifiedTopology: true
     }).then(
          () => console.log("Db connected successfully"),
          (error) => console.log(error)
     );
}


module.exports = dbConnect;