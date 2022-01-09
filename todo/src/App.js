/* eslint-disable */
import React, { useState } from "react";
import TodoCreator from "./components/TodoCreator";
import ListOfTodos from "./components/ListOfTodos";
import { nanoid } from "nanoid";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);
  const [editAvailable, setEditAvailable] = useState(false);

  const handleTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const handleBtn = (event) => {
    event.preventDefault();
    setListOfTodos([
      ...listOfTodos,
      { text: newTodo, edit: false, id: nanoid(), sort: listOfTodos.length },
    ]);
    setNewTodo("");
  };

  const handleDelete = (event) => {
    let filteredList = listOfTodos.filter((todo) => todo.id !== event.id);
    setListOfTodos(filteredList);
    setNewTodo("");
  };

  const handleEdit = (event) => {
    let currentTodo = listOfTodos.find((todo) => todo.text === event.text);
    if (currentTodo.edit == true) {
      setEditAvailable(false);
      currentTodo.edit = false;
    } else {
      currentTodo.edit = true;
      setEditAvailable(true);
    }
  };

  console.log("TOdos Sorted", listOfTodos);

  return (
    <div className="container">
      <h2>Todo List</h2>
      <TodoCreator
        handleTodo={handleTodo}
        handleBtn={handleBtn}
        newTodo={newTodo}
      />
      <ListOfTodos
        listOfTodos={listOfTodos}
        handleDelete={(event) => handleDelete(event)}
        handleEdit={(event) => handleEdit(event)}
        setEditAvailable={setEditAvailable}
      />
    </div>
  );
}

export default App;
