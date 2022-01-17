const Joi = require('@hapi/joi');
const express = require('express');
const app = express();
app.use(express.json());

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

app.post('/students',function(req, res){
    const schema  = Joi.object({
        name_controller : Joi.string().min(3).required(),
        //pass_controller : Joi.number().min(10).required(),

    });
    const result = schema.validate({name_controller : req.body.name});
    console.log(result);
    if(result.error){
        res.status(400).send(result.error.details[0].message);//Bad Request
        return;
    }
    const student = {
        id: students.length +1,
        isim: req.body.name
    };
    students.push(student);
    res.send(student);
});

app.put('/students/:id',function(req, res){
    const student = students.find(student => student.id === parseInt(req.params.id));
    if(!student){
        res.status(404).send("Student is not Found! It may not be in the id interval.");
    }
    const schema  = Joi.object({
        name_controller : Joi.string().min(3).required(),
        //pass_controller : Joi.number().min(10).required(),

    });
    const result = schema.validate({name_controller : req.body.name});
    console.log(result);
    if(result.error){
        res.status(400).send(result.error.details[0].message);//Bad Request
        return;
    }

    //update
    student.name = req.body.name;
    res.send(student);
});

const port = process.env.port || 8090;

app.listen(port);