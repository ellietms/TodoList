/* eslint-disable */
import React from "react";
import "../App.css";
import listOfTodos from "./ListOfTodos";

const Todo = ({
  eachTodo,
  handleDelete,
  handleEdit,
  editAvailable,
  setEditAvailable,
  setTodo,
  setListOfTodos,
  todo,
}) => {
  const handleEditFormText = (event) => {
    setTodo(event.target.value);
  };

  const submitNewTodo = (event) => {
    event.text = todo;
    setEditAvailable(false);
    event.edit = false;
  };

  const editForm = (
    <>
      <input value={todo} onChange={(event) => handleEditFormText(event)} />
      <button onClick={(event) => submitNewTodo(eachTodo)}>submit</button>
    </>
  );

  return (
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
};

export default Todo;
