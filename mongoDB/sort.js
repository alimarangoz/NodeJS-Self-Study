const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nodemongo:123@cluster0.ethpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}, function(err,db){
    if(err) throw err;
    let dbo = db.db("Database");
    dbo.collection("Collection").find().sort({name:1}).toArray(function (err,res){ //1 asc , -1 desc
        if(err) throw err;
        console.log(res);
        db.close();
    });

});