import React ,{useState} from 'react'
import axios from 'axios';
import {Link } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
const registerFunc =(e)=>{
    e.preventDefault();
    console.log("reg")
    const newUser={
        email,
        password,
        username
    }
    axios
    .post('http://localhost:5000/users/register',newUser)
    .then((response)=>{
      console.log("DATA: ",response.data)
    })
    .catch((err) =>{
      console.log("ERR: ",err)
    });
}


  return (
    <div className='mt-3 Login d-flex justify-content-center' >
        <form className=''>
        <div className="form-floating mb-3 hy">
  <input type="email" className="form-control" id="floatingInput"  
  onChange={(e)=>{
    setEmail(e.target.value)
}}
value={email}/>
  <label htmlFor="floatingInput">Email address</label>
</div>

<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" 
  onChange={(e)=>{
    setPassword(e.target.value)
}} 
value={password}/>
  <label htmlFor="floatingPassword">Password</label>
</div>
<br/>
<div className="form-floating">
  <input type="text" className="form-control" id="floatingInput" 
  onChange={(e)=>{
    setUsername(e.target.value)
}} 
value={username}/>
  <label htmlFor="floatingInput">Username</label>
</div>
<br/>
<div className='text-center'>
<input type="submit" value='Register' onClick={registerFunc}
className="btn btn-primary oo"/>
<Link to="/login"> Have An Account?</Link>
</div>
</form>
    </div>
  )
}