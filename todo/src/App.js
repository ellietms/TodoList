/* eslint-disable */
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoCreator from "./components/TodoCreator";
import ListOfTodos from "./components/ListOfTodos";
import { nanoid } from "nanoid";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);
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

  const handleOnDragEnd = (draggedCard) => {
    console.log("===HERE===", draggedCard);
    // const allHugs = [...allCards];
    // console.log("HUG", allHugs);
    // const [reorderedCard] = allHugs.splice(draggedCard.source.index, 1);
    // console.log("RESULT", reorderedCard);
    // allHugs.splice(draggedCard.destination.index, 0, reorderedCard);
    // console.log("NEW", allHugs);
    // setAllCards(allHugs);
  };

  let pageModel = (
    <div>
      <div className="container">
        <h2>Todo List</h2>
        <TodoCreator
          handleNewTodo={handleNewTodo}
          addNewTodo={addNewTodo}
          newTodo={newTodo}
        />
      </div>
      <div>
        <DragDropContext>
          <Droppable droppableId="todolists">
            <ListOfTodos
              listOfTodos={listOfTodos}
              handleDelete={(event) => handleDelete(event)}
              handleEdit={(event) => handleEdit(event)}
              setEditAvailable={setEditAvailable}
              isChecked={(todo) => isChecked(todo)}
            />
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );

  return pageModel;
}

export default App;
