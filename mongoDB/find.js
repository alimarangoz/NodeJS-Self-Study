const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nodemongo:123@cluster0.ethpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}, function(err,db){
    if(err) throw err;
    let dbo = db.db("Database");
    //dbo.collection("Collection").find({}).toArray(function(err,result){
    //id default olarak geliyor görmek istemiyorsak _id:0 yazılmalı.
    dbo.collection("Collection").find({},{projection:{_id:0,name:1,city:1}}).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db.close;
    });

});