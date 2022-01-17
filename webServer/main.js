var http = require("http");
var module = require("./module");


/*http.createServer(function(req,res){
    res.write("Today is: " + module.today());
    res.write("Welcome "+ module.myName());
    res.end();
}).listen(8080);*/

/*http.createServer(function(request,response){
    if(request.url == "/main"){
        response.write("You're in main");   
    }
    response.end();
}).listen(8090); */

/*http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type" : "text/plain"});
    response.write("Hello NodeJS");
    response.end();
}).listen(8080);*/

/*const url = require("url");
let address = "http://localhost:8080/?name=Ali&lastname=Marangoz";
let urlParse = url.parse(address,true);
console.log(urlParse.host);
console.log(urlParse.pathname);
console.log(urlParse.search);
let data = urlParse.query;
console.log(data.name);
console.log(data.lastname);*/

const url = require("url");
let address = "http://localhost:8080/ali";
http.createServer(function(request,response){
    
    var data = new URL(address);
    response.write(data.pathname);
    response.end();
}).listen(8080);
