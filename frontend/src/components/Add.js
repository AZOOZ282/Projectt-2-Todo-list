import React,{useState} from 'react'; 

export default function Add(props){
    const [newTitle, setNewTitle] = useState("")
    const createNewTodo=()=>{
console.log('createNewTodo from add');
props.createFunc({title:newTitle,isCompleted:false});
    }
    return(
<div className="m-3">
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            placeholder="Write new title here ..."
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            className="form-control"
          />
          <label htmlFor="floatingInput">New Task Title</label>
        </div>

        <div className="text-center">
          <button className="btn btn-success" onClick={createNewTodo}>
            Create New Task
          </button>
        </div>
      </form>
    </div>
    )
}
