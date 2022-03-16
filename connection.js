const express = require('express');
const app = express();

const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://databaseuser:user@database.fuxh4.mongodb.net/data?retryWrites=true&w=majority"

mongoose.connect(mongoURI , {
    useNewUrlParser : true,
    useCreateIndex : true ,
    useUnifiedTopology : true
})
.then( () => console.log("DB connected"))
.catch(err => console.log(err));

const port = process.env.PORT || 3000
app.listen( port , () => console.log("Hello Db"));
//const dotenv = require('dotenv');
//dotenv.conf