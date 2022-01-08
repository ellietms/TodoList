/* eslint-disable */
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import ListOfTodos from "./components/ListOfTodos";
import { nanoid } from "nanoid";

function App() {
  // What is this state for? Could you give it a more descriptive name showing what it means?
  const [todo, setTodo] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);
  // This state is never read? Why does it exist?
  const [editAvailable, setEditAvailable] = useState(false);
  // It looks like this is always the same as listOfTodos.length? Why do you need to store it separately? It feels like this just means the two can go out of sync if you forget to update them both together?
  const [count, setCount] = useState(0);

  const handleTodo = (event) => {
    setTodo(event.target.value);
  };

  const handleBtn = (event) => {
    event.preventDefault();
    setListOfTodos([
      ...listOfTodos,
      // What's a nanoid? What are you using it for?
      { text: todo, edit: false, id: nanoid(), sort: count },
    ]);
    setCount(count + 1);
    setTodo("");
  };

  const handleDelete = (event) => {
    // Does this mean if you have two of the same todo and delete one, both will be deleted?
    // Is this what you expect?
    // I would have assumed the IDs were to avoid this?
    let filteredList = listOfTodos.filter((todo) => todo.text !== event.text);
    setListOfTodos(filteredList);
    setTodo("");
  };

  const handleEdit = (event) => {
    // Same as delete - does this mean editing one will edit the first matching one, even if that's not the one you clicked on?
    let currentTodo = listOfTodos.find((todo) => todo.text === event.text);
    if (currentTodo.edit == true) {
      setEditAvailable(false);
      currentTodo.edit = false;
    } else {
      currentTodo.edit = true;
      setEditAvailable(true);
    }
  };

  //
  console.log("TOdos Sorted", listOfTodos);

  return (
    <div className="container">
      <h2>Todo List</h2>
      <HomePage handleTodo={handleTodo} handleBtn={handleBtn} todo={todo} />
      <ListOfTodos
        listOfTodos={listOfTodos}
        handleDelete={(event) => handleDelete(event)}
        handleEdit={(event) => handleEdit(event)}
        setEditAvailable={setEditAvailable}
        listOfTodos={listOfTodos}
      />
    </div>
  );
}

export default App;
