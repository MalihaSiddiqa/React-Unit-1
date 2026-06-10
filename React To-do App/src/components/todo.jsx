import React,{ useState } from "react";

function Todo(){
const [tasks,settasks]=useState([
    {
        id:1,
        text:"complete assignments1",
        completed:false
    }
]);
const [newTask,setnewTask]=useState("");
console.log(newTask);

function handleChange(event){
    setnewTask(event.target.value);
};

function handleAdd(){
    if (newTask !== "") {
        const taskObject={
            id:Date.now(),
            text:newTask
        };
        settasks([...tasks,taskObject]);
        setnewTask("");
    }
};

function handleCheck(id){
    const updateTasks=tasks.map((task)=>{
    if(tasks.id===id){
return{...task, completed: !task.completed};
    }
    return task;
    });
    settasks(updateTasks)
}

function handleDelete(id){
const filterTasks=tasks.filter((task)=>task.id !==id);
settasks(filterTasks);
};

return(
    <div style={{padding:"30px",fontFamily:"emoji"}}>
    <h1>To do List</h1>
<div style={
    {display:'flex',
    borderRadius:"5px",
    border:"1px solid #ccc"}
    }>
    <input 
    type="text"
    value={newTask}
    onChange={handleChange}
    placeholder="Enter a task.."
    />
    <button onClick={handleAdd}
    style={{padding:"10px 16px",cursor:"pointer",backgroundColor:"green"}}>Add Tasks</button>
</div>
<ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li 
            key={task.id} 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              borderRadius: "4px",
              backgroundColor: "white",
              color:"black"
            }}
          >
            <div style={{ display: "flex", alignItems: "center"}}>
            
              <input 
                type="checkbox" 
                checked={task.completed}  
                onChange={() => handleCheck(task.id)}
                style={{ cursor: "pointer" }}
              />
              
              <span className={task.completed ? "check" : ""}>
                {task.text}
              </span>
            </div>
            <button 
              onClick={() => handleDelete(task.id)} 
              style={{ 
                backgroundColor: "red", 
                color: "white", 
                border: "2px solid black", 
                borderRadius: "10px", 
                cursor: "pointer" 
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
)
}
export default Todo;