import React ,{useState} from 'react'
import axios from 'axios';
import {Link } from "react-router-dom";
export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
          console.log("DATA: ",response.data)
          props.setUsername(true);
          props.setIsLoggdin(response.data.username);
        })
        .catch((err) =>{
          console.log("ERR: ",err)
        });
    }


  return (
    <div className='Login'>


<form>
 <label htmlFor='email'>Email:</label>
<input type="email" placeholder='Write email here' onChange={(e)=>{
    setEmail(e.target.value)
}}
value={email}
/>
<br/>


<label htmlFor='password'>Password:</label>
<input type="password"placeholder='Write password here' onChange={(e)=>{
    setPassword(e.target.value)
}} 
value={password}
/>
<br/>


<input type="submit" value='Login' onClick={loginFunc} 
className="btn btn-primary"/>
<Link to="/register">Don't Have An Account?</Link>
</form>


    </div>
  )
}