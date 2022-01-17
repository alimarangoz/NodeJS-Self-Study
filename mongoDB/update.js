const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nodemongo:123@cluster0.ethpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}, function(err,db){
    if(err) throw err;
    let dbo = db.db("Database");
    let value = {$set:{city:"Ankara"}};
    dbo.collection("Collection").updateOne({name:"Kerim"},value),(function (err){
        //dbo.collection("Collection").deleteMany({name:"Kerim"}),(function (err,res){//It changes all cities that names are Kerim.    
        if(err) throw err;
        db.close();
    });

});