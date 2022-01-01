/* eslint-disable */
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import ListOfTodos from "./components/ListOfTodos";
import { nanoid } from "nanoid";

function App() {
  const [todo, setTodo] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);
  const [editAvailable, setEditAvailable] = useState(false);

  const handleTodo = (event) => {
    setTodo(event.target.value);
  };

  const handleBtn = (event) => {
    event.preventDefault();
    setListOfTodos([...listOfTodos, { text: todo, edit: false, id: nanoid() }]);
  };

  const handleDelete = (event) => {
    let filteredList = listOfTodos.filter((todo) => todo.text !== event.text);
    setListOfTodos(filteredList);
    setTodo("");
  };

  const handleEdit = (event) => {
    let thisOne = listOfTodos.find((todo) => todo.text === event.text);
    if (thisOne.edit == true) {
      setEditAvailable(false);
      thisOne.edit = false;
    } else {
      thisOne.edit = true;
      setEditAvailable(true);
    }
    console.log("NEWTODO", listOfTodos);
  };

  console.log("TOdos", listOfTodos);

  return (
    <div className="container">
      <HomePage handleTodo={handleTodo} handleBtn={handleBtn} todo={todo} />
      <ListOfTodos
        listOfTodos={listOfTodos}
        handleDelete={(event) => handleDelete(event)}
        handleEdit={(event) => handleEdit(event)}
        editAvailable={editAvailable}
        setEditAvailable={setEditAvailable}
        setTodo={setTodo}
        setListOfTodos={setListOfTodos}
        todo={todo}
        listOfTodos={listOfTodos}
      />
    </div>
  );
}

export default App;
