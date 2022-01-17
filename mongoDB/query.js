const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nodemongo:123@cluster0.ethpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}, function(err,db){
    if(err) throw err;
    let dbo = db.db("Database");
    //let query = {city:"Istanbul",name:"Umut"};
    let query = {name:/^A/} //A ile başlayan isimler.
    dbo.collection("Collection").find(query).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    })

});