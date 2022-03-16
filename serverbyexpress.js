const express = require('express');

const app = express();
const body = require('body-parser');
const morgan = require('morgan');
const expressvalidation = require('express-validator');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://utkarsh:<Utk@2003>@cluster0.zp9p9.mongodb.net/utkarsh?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser :true,
        useUnifiedTopology: true
    })

.then(() => console.log('DB connected'))

mongoose.connection.on('error' , err => {
    console.log('DB connection error : ' , err.message );
});

const getroute = require('./routes/post');
//const path = require('./routes/post');

/*app.get("/" , (req , res) =>{
    res.send();
});*/

const myownmiddleware = (req , res , next) => {
    console.log("Middleware is used !");
    next();
};  

app.use(morgan("dev"));
app.use(myownmiddleware);
app.post("/" , getroute.path);
app.use(body.json());


//app.use("/" , getroute.path);
//app.use("/" , getroute.path1);


const port = 3000 ;

app.listen(port , () => {
    console.log('Node js api listening on port :' , port);
});


//const mongoose = require('mongoose');
//const dotenv = require('dotenv');
//dotenv.config()

//mongoose.connect(
    //process.env.MONGO_URI,
  //  {useNewUrlParser : true}

//)
//.then( () => console.log('DB connected'))

//mongoose.connection.on('error' , err => {
  //  console.log('DB connection error' , err)
//});

