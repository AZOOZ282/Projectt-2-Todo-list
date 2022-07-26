const expres=require("express");
const app=expres();
const db=require("./db");
const { deleteOne } = require("./todo");
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

/*
  app.get("/complete",(req,res)=>{
Todo.find({isCompleted:true},(err,data)=>{
    if(err){
        console.log('ERR',err)
    }else{
        console.log(data)
        res.json(data)
        
    }
});
  });

  app.get("/notComplete",(req,res)=>{
    Todo.find({isCompleted:false},(err,data)=>{
        if(err){
            console.log('ERR',err)
        }else{
            console.log(data)
            res.json(data)
            
        }
    });
  });*/
  app.get("/filter",(req,res)=>{
    Todo.find({isCompleted: req.query.isCompleted},(err,data)=>{
        if(err){
            console.log('ERR',err)
        }else{
           // console.log(data)
            res.json(data)
            
       
        }
    });
      });
 app.post('/tasks',(req,res)=>{
        console.log("25:",req.body)

     Todo.create(req.body,(err,newTask)=>{
            if(err){
                console.log('ERROR: ',err)
            }else{
                res.status(201).json(newTask)
            }
        }) 
        
 })
 app.delete('/tasks/:id',(req,res)=>{
    console.log("37:",req.params.id)

 Todo.deleteOne({_id: req.params.id},(err,deleteObj)=>{
        if(err){
            console.log('ERROR: ',err)
        }else{
            console.log(deleteObj);
            deleteOne.deletedCount === 1
            ? res.json("delete this todo successfully")
            :res.status(404).json("this todo is not found")
        }
    }) ;
    
});

app.delete('/tasks',(req,res)=>{
   // console.log("37:",req.params.id)

 Todo.deleteMany({isCompleted:true},(err,deleteObj)=>{
        if(err){
            console.log('ERROR: ',err)
        }else{
            console.log(deleteObj);
            deleteOne.deletedCount === 0
            ? res.json("There are no todo completed found")
            :res.json("Delete all completed todos successfully")
        }
    }) ;
    
}); 

app.put('/tasks/:id',(req,res)=>{
    //console.log("37:",req.params.id)

 Todo.updateOne({_id: req.params.id},
    {title: req.body.newTitle},(err,updateObj)=>{
        if(err){
            console.log('ERROR: ',err)
            res.status(400).json(err);
        }else{
            console.log(updateObj);
          updateObj.modifiedCount === 1
            ? res.json("update this todo successfully")
            :res.status(404).json("this todo is not found")
            
        }
    }) ;
    
});

app.put('/tasks/:id/:isCompleted',(req,res)=>{
   console.log("124:",req.params)
 Todo.updateOne({_id: req.params.id},
    {isCompleted: req.params.isCompleted},(err,updateObj)=>{
        if(err){
            console.log('ERROR: ',err)
            res.status(400).json(err);
        }else{
            console.log(updateObj);
          updateObj.modifiedCount === 1
            ? res.json("update this todo successfully")
            :res.status(404).json("this todo is not found")
            
        }
    }) ;
    
});


 app.listen(5000,()=>{
console.log('SERVER IS WORKING')
 })