const http = require('http');

const server = http.createServer((req , res) => 
{
    res.end("This is my first server and happy to have it");
});

server.listen(8900);