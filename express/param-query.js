const express = require('express');
const app = express();

const students = [
    {id:1, name:"Ali"},
    {id:2, name:"Umut"},
    {id:3, name:"Mertcan"},
    {id:4, name:"Kerim"},
];

app.get('/',function(req, res){
    res.send("Index page");
});

app.get('/students',function(req, res){
    res.send(students);
});

app.get('/students/:id',function(req, res){
    const student = students.find(student => student.id === parseInt(req.params.id));
    if(!student){
        res.status(404).send("Student is not Found! It may not be in the id interval.");
    }else{
        res.send(student);
    }
});

const port = process.env.port || 8090;

app.listen(port);
