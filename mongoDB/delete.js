const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nodemongo:123@cluster0.ethpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}, function(err,db){
    if(err) throw err;
    let dbo = db.db("Database");
    dbo.collection("Collection").deleteOne({name:"Ali"}),(function (err){
        //dbo.collection("Collection").deleteMany({name:/^A/}),(function (err,res){    
        if(err) throw err;
        db.close();
    });

});