import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import {Routes,Route,Link } from "react-router-dom";

import Todo from "./components/Todo";
import Add from "./components/Add";
import Register from "./components/Register";
import Login from "./components/Login";


export default function App() {
const [tasks, setTasks]=useState([])
const [isLoggdin, setIsLoggdin] = useState(false)
const [username, setUsername] = useState(second)
useEffect(()=>{
  getData();
},[])

const getData=()=>{
  axios
  .get('http://localhost:5000/tasks')
  .then((response)=>{
    //console.log("Response: ",response)
    console.log("DATA: ",response.data)
    setTasks(response.data)
  })
  .catch((err) =>{
    console.log("ERR: ",err)
  });
};

const postNewTodo=(body)=>{
 // console.log("App Func postNewTodo")
 axios
  .post('http://localhost:5000/tasks',body)
  .then((response)=>{
    //console.log("Response: ",response)
    console.log("DATA: ",response.data)
    //setTasks(response.data)
  getData();
  })
  .catch((err) =>{
    console.log("ERR: ",err)
  });
}

const deleteTodo=(id)=>{
  axios
   .delete(`http://localhost:5000/tasks/${id}`)
   .then((response)=>{
     //console.log("Response: ",response)
     console.log("DATA: ",response.data)
     //setTasks(response.data)
   getData();
   })
   .catch((err) =>{
     console.log("ERR: ",err)
     getData();
   });
  };

  const toggleTodo=(id,newStatus)=>{
    axios
     .put(`http://localhost:5000/tasks/${id}/${newStatus}`)
     .then((response)=>{
       //console.log("Response: ",response)
       console.log("DATA: ",response.data)
       //setTasks(response.data)
     getData();
     })
     .catch((err) =>{
       console.log("ERR: ",err)
       
     });
    };

const deleteTasks=(id)=>{
  axios
   .delete(`http://localhost:5000/tasks`)
   .then((response)=>{
     //console.log("Response: ",response)
     console.log("DATA: ",response.data)
     //setTasks(response.data)
   getData();
   })
   .catch((err) =>{
     console.log("ERR: ",err)
     getData();
   });
  };

  const filterData=(status)=>{
    axios
    .get(`http://localhost:5000/filter?isCompleted=${status}`)
    .then((response)=>{
      //console.log("Response: ",response)
      console.log("DATA: ",response.data)
      setTasks(response.data)
    })
    .catch((err) =>{
      console.log("ERR: ",err)
    });
  };
  

const mapOverTasks=tasks.map((taskObj,i)=>(
<Todo 
key={taskObj._id} 
task={taskObj} 
deleteTodo={deleteTodo} 
toggleTodo={toggleTodo}/>
));
  return (
    <div className="App">
      <p>APP</p>

<Routes>
  <Route path="/home" element={
    <div className='Home'>
    <button onClick={getData}>GET TASKS</button>
    <button onClick={deleteTasks}>DLELETE ALL TASKS Completed</button>
    <button onClick={()=>{
      filterData(true)
    }}>GET DONE</button>
    <button onClick={()=>{
      filterData(false)
    }}>GET PENDING</button>
   <Add createFunc={postNewTodo}/>
 {mapOverTasks}
  </div>
}/>
  <Route path="/login" element={<Login
  setIsLoggdin={setIsLoggdin}
  setUsername={setUsername} />
  }/>
  <Route path="/register" element={<Register/>}/>
</Routes>

<nav>
        <Link to="/home">Home</Link>{" | "}
        <Link to="/login">Login </Link>{" | "}
        <Link to="/register">Register </Link>
      </nav>
  
      {/**/}
    </div>
  );
};
