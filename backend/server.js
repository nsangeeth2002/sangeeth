
const express = require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mysql=require('mysql2');

const app = express();
app.use(bodyparser.json());
app.use(cors());
 

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'bike',
    port:3306
});

db.connect((err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('connect successfully');
    }
});


app.post('/posts',(req,res)=>{
    const {name,color,price}=req.body;
db.query('insert into bikes(name,color,price)value(?,?,?)',[name,color,price],(error,result,field)=>{
    if(error){
        console.log(error);
        res.status(500).send("insert erro");
    } else {
        res.status(200).send(req.body);
    }
});
});

app.get('/getAll',(req,res)=>{
    db.query('select * from bikes',(error,result,field)=>{
        if(error){
            console.log('error');
            res.status(500).send('getAll error');
        } else{
            console.log('connected');
            res.status(200).send(result);
        }
    });
});


app.get('/getById/:id',(req,res)=>{
    const {id}=req.params;
    
    db.query('select * from bikes where id=?',[id],(error,result,field)=>{
        if(error){
            console.log(error);
            res.status(500).send('errror');
        } else {
            console.log('success');
            res.status(200).send(result[0]);
        }
    })
})

app.put('/updateById/:id',(req,res)=>{
    const {id}=req.params;
    const {name,color,price}=req.body;


    db.query('update bikes set name=?,color=?,price=? where id=?',
    [name,color,price,id],(error,results,field)=>{

         if(error){
            console.log(error);
            res.status(500).send('error');
        } else {
            console.log(error);
            res.status(200).send(req.body);
        }
    })
})

app.delete('/deleteById/:id',(req,res)=>{
    const {id}=req.params;
    db.query('delete from bikes where id=?',[id],(error,result,field)=>{
        if(error){
            console.log(error);
            res.status(500).send('error');
        } else {
            console.log('success');
            res.status(200).send(result);
        }
    });
});
 


 app.listen(3000);