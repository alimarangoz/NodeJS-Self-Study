const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const url = "mongodb://localhost:27017"



app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: false}));

app.get("/",function(req, res){
     MongoClient.connect(url,function(err,db){
         if (err) throw err;
         let dbo = db.db("todolist");
         dbo.collection("todo").find({}).toArray((err,result) =>{
             if(err) throw err;
             res.render("index",{data:result}); //{data:todo}
             db.close();
         });
     });
    
});

app.post("/", function(req, res){
     MongoClient.connect(url,function(err,db){
         if (err) throw err;
         let dbo = db.db("todolist");
         dbo.collection("todo").insertOne({input:req.body.input},function(err,result){
             if(err) throw err;
             console.log("Recorded!");
         });
        });
        res.redirect("http://localhost:3000");
});


app.listen(port);