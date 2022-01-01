/* eslint-disable */
import React from "react";
import "../App.css";

const Todo = ({ eachTodo, handleDelete, handleEdit }) => {
  return (
    <div className="eachTodo">
      <p className="todo-text">{eachTodo.text}</p>
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
};

export default Todo;
