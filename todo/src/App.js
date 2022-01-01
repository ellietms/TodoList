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
    setListOfTodos([...listOfTodos, { text: todo, edit: false, id: nanoid() }]);
    setTodo("");
  };

  const handleDelete = (event) => {
    let filteredList = listOfTodos.filter((todo) => todo.text !== event.text);
    setListOfTodos(filteredList);
  };

  const handleEdit = (event) => {
    console.log(event.text);
    let thisOne = listOfTodos.find((todo) => todo.text === event.text);
    thisOne.edit = true;
    console.log("What", thisOne);
  };

  console.log("TOdos", listOfTodos);

  return (
    <div className="container">
      <HomePage handleTodo={handleTodo} handleBtn={handleBtn} todo={todo} />
      <ListOfTodos
        listOfTodos={listOfTodos}
        handleDelete={(event) => handleDelete(event)}
        handleEdit={(event) => handleEdit(event)}
      />
    </div>
  );
}

export default App;
