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
      <button onClick={(event) => submitNewTodo(eachTodo)}>
        <span style={{ color: "green" }}>submit</span>
      </button>
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
          <span style={{ color: "green" }}>
            <i className="fas fa-check"></i>
          </span>
        </button>
        <button
          onClick={(event) => handleEdit(eachTodo)}
          className="todo-button-style"
        >
          <span style={{ color: "blue" }}>
            <i className="fa fa-pen"></i>
          </span>
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
          <span style={{ color: "red" }}>X</span>
        </button>
      </div>
    );
  }

  let todoBox;
  if (eachTodo.edit == false) {
    todoBox = (
      <div className="eachTodo">
        <label className={eachTodo.classCross}>{eachTodo.text}</label>
        {showButtons}
      </div>
    );
  } else {
    todoBox = (
      <div className="eachTodo">{eachTodo.edit == true && editForm}</div>
    );
  }

  return <>{todoBox}</>;
};

export default Todo;
