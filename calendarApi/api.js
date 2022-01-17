const express = require('express');
const mysql = require('mysql');
const axios = require('axios');
const port = process.env.port || 3000;

const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password:"",
    database: "turktakvim_api"
});

conn.connect();

app.get("/api/iller",(req, res) => {
    conn.query("select * from iller",(err,result,fields)=>{
        if(err) return err;
        return res.status(200).send(result);
    });
});

app.get("/api/ilceler/:il_no",function(req, res){
    conn.query(`select * from ilceler where il_no = ${conn.escape(parseInt(req.params.il_no))}`,function(err,result,fields){
        if(err) return err;
        return res.status(200).send(result);
    });
});

app.listen(port);