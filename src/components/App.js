import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });




function App() {

  const [filtered,updateFilter]=useState("All");
  const [displayList,updateList] = useState(TASKS);
  

  function handleFilter(event) {
    updateFilter(event.target.textContent);
    
    
    const newList = TASKS.filter((item)=>event.target.textContent==="All"?item:item.category===event.target.textContent)
    updateList(newList);
    console.log(event.target.textContent, filtered);
    if (event.target.textContent===filtered) {
      event.target.className="";
    }
    event.target.className="selected";

  }

  function updateDelete(newList) {
    updateList(newList);
    console.log(displayList);
  }
  
function handleUpdate(event) {
  event.preventDefault();
  

  const newEntry = {
    text: event.target[0].value,
    category: event.target[1].value
  }
  
  const addedList = [...displayList,newEntry]
  updateList(addedList);
  console.log(addedList);
}

 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoriesArray={CATEGORIES} filterList={handleFilter}/>
      <NewTaskForm categoriesArray={CATEGORIES} onTaskFormSubmit={handleUpdate}/>
      <TaskList tasksArray={displayList} filterList={filtered} deleted={updateDelete} />
    </div>
  );
}

export default App;
