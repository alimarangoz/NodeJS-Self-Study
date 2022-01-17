const http = require("http");
const url = require("url");
const fs = require("fs");
const { listenerCount } = require("events");


http.createServer(function(req,res){
    let q = url.parse(req.url);
    let fileName = "." + q.pathname + ".html";
    fs.readFile(fileName,function(err,data){
        if(err){
            res.writeHead(404,{"Content-Type": "text/plain"});
            return res.end("404 Not Found!");
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    });

}).listen(8080);