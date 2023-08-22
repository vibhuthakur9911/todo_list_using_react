import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className=" my-label">
          What needs to be done?
        </label>
      </h2>
     <div className="from-input">
     <input
        type="text"
        id="new-todo-input"
        className="input input__lg my-input"
          name="text"
        autoComplete="off"  
        value={name}
        placeholder="Enter your Task Here...."
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg my_btn">
        Add <span>+</span>
      </button>
     </div>
    </form>
  );
}


export default Form;