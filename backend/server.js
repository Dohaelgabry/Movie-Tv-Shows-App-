const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

const dbConnect = require('./src/config/database.config');
const app = express();
dotenv.config();
dbConnect();

// التشفير
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// 


app.use(express.urlencoded({extended:false}));
//localhost:4200
//localhost:6000

app.use(cors({
     credentials:true,
     origin: '*'
}));



// start router
const registerController = require('./src/router/registerRouter')

const loginController = require('./src/router/loginRouter')

// end router

///////////////////// start routes ////////////////////////////

app.use('/register', registerController)
app.use('login', loginController )

///////////////////// end routes ////////////////////////////






app.get('/api/wellcome', (req, res) => {
     res.send("hello world")
})
 






const port=5000;
app.listen(port,()=>{
     console.log('websit server on http://localhost:' + port)
})