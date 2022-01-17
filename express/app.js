// const http = require('http');

// http.createServer((req,res) => {
//     if(req.url === '/'){
//         res.write("Hello World!");
//         res.end();
//     }

//     if(req.url === '/api/students'){
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// }).listen(8080);

const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send("Hello World!");
});

//app.get('/api/:id',function(req,res){
    app.get('/api/:year/:month',function(req,res){
    //res.send(JSON.stringify([1,2,3]));
    //res.send(req.params.id);
    //res.send(req.query);
    res.send(req.params);
});

const port = process.env.port || 8080;

app.listen(port);