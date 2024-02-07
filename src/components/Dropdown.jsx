import React from "react";

const Dropdown = ({ onChange }) => {
 
  return (
    <select onChange={(e)=>onChange(e.target.value)}>
      <option value="price">Sort by Price</option>
      <option value="name">Sort by Name</option>
    </select>
  );
};

export default Dropdown;
