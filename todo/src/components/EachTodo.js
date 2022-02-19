/* eslint-disable */
import React, { useState } from "react";
import "../App.css";

const Todo = ({ eachTodo, handleDoneTodo, handleEdit, setEditAvailable }) => {
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

  let showEditButton;
  if (eachTodo.checked === false || eachTodo.checked === null) {
    showEditButton = (
      <button
        onClick={(event) => handleEdit(eachTodo)}
        className="todo-button-style"
      >
        Edit
      </button>
    );
  }

  let showDoneButton;
  if (eachTodo.checked === false || eachTodo.checked === null) {
    showDoneButton = (
      <button
        onClick={(event) => handleDoneTodo(eachTodo)}
        className="todo-button-style"
      >
        completed
      </button>
    );
  } else {
    showDoneButton = (
      <button
        onClick={(event) => handleDoneTodo(eachTodo)}
        className="todo-button-style"
      >
        not completed
      </button>
    );
  }

  const todoBox = (
    <div className="eachTodo text-center">
      <label className={eachTodo.classCross}>{eachTodo.text}</label>
      {eachTodo.edit == true && editForm}
      <div className="buttons-container">
        {showDoneButton}
        {showEditButton}
      </div>
    </div>
  );

  return <>{todoBox}</>;
};

export default Todo;
