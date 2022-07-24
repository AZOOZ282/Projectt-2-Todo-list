const mongoose=require("mongoose");

const dbURL="mongodb://localhost:27017/TodoListV01";

mongoose.connect(dbURL);


//EXTRA

const db=mongoose.connection


db.on("error",(err)=>{
    console.log("ERROR in MongoDB")
})
db.on("connected",(err)=>{
    console.log("MongoDB is Connected..")
})




