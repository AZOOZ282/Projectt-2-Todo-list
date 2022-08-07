import React ,{useState} from 'react'
import axios from 'axios';
export default function Register() {
    const [email, setEmail] = useState("azooz@gmail.com");
    const [password, setPassword] = useState("12345");
    const [username, setUsername] = useState("azooz282");
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
    <div className='Register' >
        <from>
            <label htmlFor='email'>Email:</label>
<input type="email" placeholder='Write email here'onChange={(e)=>{
    setEmail(e.target.value)
}}
value={email}/>
<br/>
<label htmlFor='password'>Password:</label>
<input type="password"placeholder='Write password here' onChange={(e)=>{
    setPassword(e.target.value)
}}
value={password}/>
<br/>
<label htmlFor='username'>Username:</label>
<input type="text"placeholder='Write user name here' onChange={(e)=>{
    setUsername(e.target.value)
}}
value={username}/>
<br/>
<input type="submit" value='Register' onClick={registerFunc}/>
</from>
    </div>
  )
}
