const {Schema, model}=require("mongoose");
const userSchema=new Schema({
    username: String,
    email:{ type: String, required: true, unique:true},
    password:{ type: String, required: true}
})
// Model
const User=model("User",userSchema)

module.exports=User;