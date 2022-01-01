/* eslint-disable */
import React, { useState } from "react";
import "../App.css";

const Todo = ({ eachTodo, handleDelete, handleEdit, setEditAvailable }) => {
  const [inputValue, setInputValue] = useState(eachTodo.text);

  const handleEditFormText = (event) => {
    setInputValue(event.target.value);
  };

  const submitNewTodo = (event) => {
    event.text = inputValue;
    setEditAvailable(false);
    event.edit = false;
  };

  const editForm = (
    <>
      <input
        value={inputValue}
        onChange={(event) => handleEditFormText(event)}
      />
      <button onClick={(event) => submitNewTodo(eachTodo)}>submit</button>
    </>
  );

  const todoBox = (
    <div className="eachTodo">
      {eachTodo.edit == false && <p className="todo-text">{eachTodo.text}</p>}
      {eachTodo.edit == true && editForm}
      <div className="buttons-container">
        <button
          onClick={(event) => handleDelete(eachTodo)}
          className="todo-button-style"
        >
          delete
        </button>
        <button
          onClick={(event) => handleEdit(eachTodo)}
          className="todo-button-style"
        >
          Edit
        </button>
      </div>
    </div>
  );

  return <>{todoBox}</>;
};

export default Todo;
