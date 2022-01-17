var http = require("http");
const fs = require("fs");
http.createServer(function(req,res){
    // fs.readFile("index.txt",function(error,data){
    //     res.writeHead(200,{"Content-Type":"html"});
    //     res.write(data);
    //     res.end();
    //});
    // fs.appendFile("languages.txt"," Javascript",function(err){
    //     if(err) throw err;
    //     console.log("Recorded!");
    // });
    //fs.open("new.txt","w",function(err){});
    //fs.unlink("new.txt",function(err){});
    
}).listen(8080);



