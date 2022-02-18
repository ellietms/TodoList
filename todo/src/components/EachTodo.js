/* eslint-disable */
import React, { useState } from "react";
import "../App.css";

const Todo = ({
  eachTodo,
  handleDelete,
  handleEdit,
  setEditAvailable,
  isChecked,
  todoDoneClass,
}) => {
  const [inputValue, setInputValue] = useState(eachTodo.text);

  const handleEditFormText = (event) => {
    setInputValue(event.target.value);
    console.log("EDIT", event);
  };

  const submitNewTodo = (event) => {
    event.text = inputValue;
    setEditAvailable(false);
    event.edit = false;
  };

  const editForm = (
    <div>
      <input
        value={inputValue}
        onChange={(event) => handleEditFormText(event)}
      />
      <button onClick={(event) => submitNewTodo(eachTodo)}>submit</button>
    </div>
  );

  const todoBox = (
    <div className="eachTodo text-center">
      <label className={todoDoneClass}>{eachTodo.text}</label>
      {eachTodo.edit == true && editForm}
      <div className="buttons-container">
        <button
          onClick={(event) => handleDelete(eachTodo)}
          className="todo-button-style"
        >
          done
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
