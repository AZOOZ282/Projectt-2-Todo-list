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
const [username, setUsername] = useState("")
useEffect(()=>{
  getData();
},[])
console.log(isLoggdin)


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

const logoutFunc =()=>{
  setIsLoggdin(false);
  setUsername("");
  
}
  
const mapOverTasks=tasks.map((taskObj,i)=>(
<Todo 
key={taskObj._id} 
task={taskObj} 
deleteTodo={deleteTodo} 
toggleTodo={toggleTodo}/>
));

  return (
    <div className="m-3">


<nav className="navbar navbar-expand-lg navbar-light bg-light m-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Todos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>


<div className='m-3' id='aa'>


<button onClick={logoutFunc} 
className="btn btn-info m-3"
>Logout</button>

<button
          type="button"
          class="btn btn btn-dark"
          data-bs-toggle="popover"
          title="Todo List"
          data-bs-content="Welcome to Todo List Web Application"
        >
          {isLoggdin ? "Welcome " + isLoggdin : "Please Login"}{" "}
        </button>


</div>


      <Routes>
  <Route path="/home" element={
    <div className='Home m-3' >
      <div id='aa'>
    <button onClick={getData}className="btn btn-primary m-1">ALL TASKS</button>
    <button onClick={deleteTasks} className="btn btn-danger m-1">DLELETE Completed TASKS</button>
    <button onClick={()=>{
      filterData(true)
    }} className="btn btn-outline-success m-1">DONE</button>
    <button onClick={()=>{
      filterData(false)
    }} className="btn btn-warning m-1">PENDING</button>
    </div>

   <Add createFunc={postNewTodo}/>
   <div className='list-group'>
 {mapOverTasks}
 </div>
  </div>
}/>
  <Route path="/login" element={<Login
  setIsLoggdin={setIsLoggdin}
  setUsername={setUsername} />
  }/>
  <Route path="/register" element={<Register/>}/>
</Routes>



      {/**/}
    </div>
  );
};
