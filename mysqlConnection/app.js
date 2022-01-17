const { connect } = require("http2");
let mysql = require("mysql");

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:"",
    database:"nodejsdb"
});

// connection.connect(function(err){
//     if(err) throw err;
//     var query = "create database nodejsdb"
//     connection.query(query,function(err){
//         if(err) throw err;
//         console.log("Database created!");
//     });

//     console.log("Connection Success!");
// });

// connection.connect(function(err){
//     if(err) throw err;
//     connection.query("create table costumers (name VARCHAR(30),address VARCHAR(70))",function(err){
//         if(err) throw err;
//         console.log("Table has created!");
//     });
// });

// connection.connect(function(err){
//     if(err) throw err;
//     connection.query("create table students (id INT AUTO_INCREMENT PRIMARY KEY , name VARCHAR(30), address VARCHAR(60))",function (err){
//         if(err) throw err;
//         console.log("Table has created!");
//     });
// });

// connection.connect(function(err){
//     if(err) throw err;
//     let values = [
//         ["Umut","Bagcilar"],
//         ["Mertcan","Esenler"],
//         ["Kerim","Seka"]
//     ];
//     //connection.query("insert into students (name,address) values('Ali','Hatay/Samandag')",function(err){ //single inserting
//       connection.query("insert into students (name,address) values ?",[values],function(err){  
//         if(err) throw err;
//         console.log("Element has been inserted!");
//     });
// });

// connection.connect(function (err){
//     if(err) throw err;
//     let name = "Ali";
//     let address = "Hatay/Samandag"
//     let query = ("select * from students where name = ? and address = ?");
//     //let query = "select * from students"
//     connection.query(query,[name,address],function(err,result){
//         if(err) throw err;
//         console.log(result);
//         //console.log(result[0].address);
//     });
// });

connection.connect(function (err){
    if(err) throw err;

    let query = ("select * from students limit 2,2"); // 2'den sonra(limit) 2 item getir(offset).
    //let query = "select * from students"
    connection.query(query,function(err,result){
        if(err) throw err;
        console.log(result);
        //console.log(result[0].address);
    });
});

