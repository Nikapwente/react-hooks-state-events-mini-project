import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasksArray, deleted, working}) {


  const [displayList,updateList] = useState(tasksArray);
  

  let newList = tasksArray.map((item)=>item)


  function deleteElement(event) {
    console.log(event.target.previousSibling.textContent);
    newList = newList.filter((item)=>item.text!==event.target.previousSibling.textContent)
    updateList(newList);
    deleted(newList);
    
  }

  
  
  
  
  return (
    <div className="tasks">
      {newList.map((item, index)=>(
        <Task key={index} text={item.text} category={item.category} handleCLick={deleteElement}/>
      ))}
    </div>
  );
}

export default TaskList;
