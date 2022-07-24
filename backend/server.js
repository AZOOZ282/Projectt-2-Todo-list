const expres=require("express");
const app=expres();
const db=require("./db");
const Todo=require("./todo");
console.log(Todo);
//app.use(expres.json);
app.use(expres.json());

 app.get('/',(req,res)=>{
    res.json('GET / is Working')
 })

 app.get('/tasks',(req,res)=>{ 
    Todo.find({},(err,data)=>{
        if(err){
            console.log('ERROR: ',err)
        }else{
            res.json(data)
        }
    });
  });

 app.post('/tasks',(req,res)=>{
        console.log("24:",req.body)

     Todo.create(req.body,(err,newTask)=>{
            if(err){
                console.log('ERROR: ',err)
            }else{
                res.status(201).json(newTask)
            }
        }) 
        
 })



 app.listen(5000,()=>{
console.log('SERVER IS WORKING')
 })