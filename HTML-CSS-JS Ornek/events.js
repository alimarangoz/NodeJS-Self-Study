// const fs = require("fs");
// let rs = fs.createReadStream("./exa.txt");

// rs.on("open",function(){
//     console.log("File has opened!");
// });

const events = require("events");
let eventEmitter = new events.EventEmitter();

let myFunc = function(){
    console.log("My Function");
}

myFunc();

eventEmitter.on("MyFunctionEvent",myFunc);

eventEmitter.emit("MyFunctionEvent"); 

