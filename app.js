//console.log("Hello world from node js ");
//console.log("Process : " , process);
/*const { sum  , divide , multiply } = require("./add");
const http = require('http');
//const mult = require("./add");

const server = http.createServer((req , res) => {
    res.end("Hello world from js , angular  and node");
});

server.listen(3000);

const total = sum(10 , 5);
 multiplication = multiply( 5 , 6);
 const div = divide(10 , 2);
console.log("Total :" , total);
console.log("Multiplication : " , multiplication);
console.log("Division : " , div);*/
/*const express = require('express')
const app = express()

app.get('/' , (req , res)=>{
    res.send("Hey whats up , how you doing ! going well "  )
})
app.listen(3000);*/

const fs = require('fs');

const filename = "file.txt";



fs.readFile( filename , (err , data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

// const data = fs.readFileSync(filename);

//console.log(data.toString());
console.log("node js sync ");

