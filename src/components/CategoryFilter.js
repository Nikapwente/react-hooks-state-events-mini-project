import React from "react";

function CategoryFilter({categoriesArray, filterList}) {





  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesArray.map((item, index)=><button key={index} onClick={filterList}>{item}</button>)}
      
    </div>
  );
}

export default CategoryFilter;
