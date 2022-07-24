const expres=require("express");
const app=expres();
const db=require("./db");
const Todo=require("./todo");
console.log(Todo);

 app.get('/',(req,res)=>{
    res.json('GET / is Working')
 })
 app.get('/tasks',(req,res)=>{
    res.json('GET / is Working')
 })



 app.listen(5000,()=>{
console.log('SERVER IS WORKING')
 })