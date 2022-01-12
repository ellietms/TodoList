/* eslint-disable */
import React, { useState } from "react";
import TodoCreator from "./components/TodoCreator";
import ListOfTodos from "./components/ListOfTodos";
import { nanoid } from "nanoid";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [listOfTodos, setListOfTodos] = useState(["Hi"]);
  const [editAvailable, setEditAvailable] = useState(false);

  const handleNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const addNewTodo = (event) => {
    event.preventDefault();
    setListOfTodos([
      ...listOfTodos,
      {
        text: newTodo,
        edit: false,
        id: nanoid(),
        sort: listOfTodos.length,
        checked: false,
      },
    ]);
    setNewTodo("");
  };

  const isChecked = (todo) => {
    if (todo.checked === false) {
      todo.checked = true;
    }
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
        handleNewTodo={handleNewTodo}
        addNewTodo={addNewTodo}
        newTodo={newTodo}
      />
      <DragDropContext
        onDragEnd={(...props) => console.log("DRAG PROPS", props)}
      >
        <ListOfTodos
          listOfTodos={listOfTodos}
          handleDelete={(event) => handleDelete(event)}
          handleEdit={(event) => handleEdit(event)}
          setEditAvailable={setEditAvailable}
          isChecked={(todo) => isChecked(todo)}
        />
      </DragDropContext>
    </div>
  );
}

export default App;
