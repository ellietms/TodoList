/* eslint-disable */
import React, { useState } from "react";
import "../App.css";

const Todo = ({ eachTodo, handleDoneTodo, handleEdit, setEditAvailable }) => {
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
    <div>
      <input
        value={inputValue}
        onChange={(event) => handleEditFormText(event)}
      />
      <button onClick={(event) => submitNewTodo(eachTodo)}>submit</button>
    </div>
  );

  let showButtons;
  if (eachTodo.checked === false || eachTodo.checked === null) {
    showButtons = (
      <div className="buttons-container">
        <button
          onClick={(event) => handleDoneTodo(eachTodo)}
          className="todo-button-style"
        >
          <i className="fas fa-check"></i>
        </button>
        <button
          onClick={(event) => handleEdit(eachTodo)}
          className="todo-button-style"
        >
          <i className="fa fa-pen"></i>
        </button>
      </div>
    );
  } else {
    showButtons = (
      <div className="buttons-container">
        <button
          onClick={(event) => handleDoneTodo(eachTodo)}
          className="todo-button-style"
        >
          X
        </button>
      </div>
    );
  }

  let todoBox;
  if (eachTodo.edit == false) {
    todoBox = (
      <div className="eachTodo text-center">
        <label className={eachTodo.classCross}>{eachTodo.text}</label>
        {showButtons}
      </div>
    );
  } else {
    todoBox = (
      <div className="eachTodo text-center">
        {eachTodo.edit == true && editForm}
      </div>
    );
  }

  return <>{todoBox}</>;
};

export default Todo;
