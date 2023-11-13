import React from "react";

function NewTaskForm({categoriesArray, onTaskFormSubmit}) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categoriesArray.map((item, index) => <option key={index} value={item}>{item}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
