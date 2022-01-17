/*const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nodemongo:123@cluster0.ethpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {

  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Mongo Connection is Success!")
  client.close();
});*/

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nodemongo:123@cluster0.ethpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}, function(err,db){
    if(err) throw err;
    let dbo = db.db("Database");
    dbo.createCollection("Collection", function(er){
        if (err) throw err;
        console.log("Collection created");
        db.close;
    })
});