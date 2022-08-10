import React ,{useState} from 'react'
import axios from 'axios';
import {Link } from "react-router-dom";
export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const [loginStatus, setLoginStatus] = useState(null)
const [loginMassage, setLoginMassage] = useState("")
//200 || 400 || 404
    const loginFunc =(e)=>{
        e.preventDefault();
        console.log("login")
        const userInfo={
            email,
            password
        }
        axios
        .post('http://localhost:5000/users/login',userInfo)
        .then((response)=>{
          setLoginStatus(response.status)
          setLoginMassage(response.data.massage)
         // console.log("DATA: ",response.data)
          props.setUsername(true);
          props.setIsLoggdin(response.data.username);
        })
        .catch((err) =>{
        //  console.log("ERR: ",err)
          setLoginStatus(false)
          setLoginMassage(null)
        });
    }


  return (
    <div className='mt-3 Login d-flex justify-content-center'>

<form  className='d-grid gap-3'>
<div className="form-floating mb-3">
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


{loginStatus===200 &&(
  <div className='alert alert-success text-center' role="alert">
{loginMassage}
</div>
)}


{(loginStatus===400 || loginStatus===404)&&
  <div className='alert alert-danger text-center' role="alert">
{loginMassage}
</div>
}




<div className='text-center'>
<input type="submit" value='Login' onClick={loginFunc} 
className="btn btn-primary"/>
<Link to="/register" className="btn btn-link">Don't Have An Account?</Link>
</div>
</form>

    </div>
  )
}


{/*<div className='Login'>*/}

