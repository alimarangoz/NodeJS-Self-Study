const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine","ejs");
app.use("/assets",express.static("assets"));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req, res){
    //res.send("Index page");
    //res.sendFile(__dirname + "/index.html");
    res.render("index");
});

app.get('/about', function(req, res){
    //res.send("About page");
    //res.sendFile(__dirname + "/about.html");
    res.render("about");
});

app.get("/profile/:name",function(req, res){
    //res.send(`Profile belongs to ${req.params.name}.`);
    let personal_info = {age:30, job:"engineer",foreign_language : ["Deutsch","English"],admin:true};
    res.render(`profile`,{person:req.params.name , data:personal_info });//render ile otomatik views klasörüne bakıyor.
});

app.get("/contact",function(req, res){
    res.render("contact");
    
});

app.post("/contact", function(req, res){
    console.log(req.body.fname);
    console.log(req.body.email);
    console.log(req.body.subject);
    res.end();
});


app.listen(port);