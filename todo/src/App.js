/* eslint-disable */
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import ListOfTodos from "./components/ListOfTodos";
import { nanoid } from "nanoid";

function App() {
  const [todo, setTodo] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);

  const handleTodo = (event) => {
    setTodo(event.target.value);
  };

  const handleBtn = (event) => {
    event.preventDefault();
    setListOfTodos([
      ...listOfTodos,
      { text: todo, completed: false, id: nanoid() },
    ]);
    setTodo("");
  };

  const handleDelete = (eachTodo) => {
    console.log(eachTodo);
  };

  const handleEdit = (event) => {};

  console.log("TOdos", listOfTodos);

  return (
    <div className="container">
      <HomePage handleTodo={handleTodo} handleBtn={handleBtn} todo={todo} />
      <ListOfTodos
        listOfTodos={listOfTodos}
        handleDelete={(eachTodo) => handleDelete(eachTodo)}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
