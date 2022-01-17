const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nodemongo:123@cluster0.ethpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}, function(err,db){
    if(err) throw err;
    let dbo = db.db("Database");
    //we can add an id to the data while writing object with _id command.
    let obj = [
        {name:"Umut", city:"Istanbul" },
        {name:"Kerim", city:"Kocaeli"},
        {name:"Mertcan",city:"Zonguldak"}, 
    ];
    //dbo.collection("Collection").insertOne({isim:"Ali"},function(err){
    dbo.collection("Collection").insertMany(obj,function(err,res){
        if(err) throw err;
        console.log("Data Added");
        console.log(`${res.insertedCount} data added!`);
        db.close;
    });
    //If you want to insert many items to the collection you should write insertMany and create a variable like [{}] this.

});
