
const express = require('express');

const controller = require('../controller/control');

const path = express.Router();
const validator = require('../helper/validator');
//const path1 = express.Router();

 //const address = (req , res) =>{
   // res.send("Hello world by express server by help of node js ");
//};

//path.get("/" , controller.address );
path.get("/" , controller.getposts);
path.post("/post" , controller.createpost);
//path1.get("/" , controller.address2);
module.exports = path;