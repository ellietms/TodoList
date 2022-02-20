/* eslint-disable */
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoCreator from "./components/TodoCreator";
import ListOfTodos from "./components/ListOfTodos";
import { nanoid } from "nanoid";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);
  const [editAvailable, setEditAvailable] = useState(false);
  // const [completedTodoClass, setCompletedTodoClass] = useState();

  useEffect(() => {}, []);

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
        checked: null,
        classCross: null,
      },
    ]);
    setNewTodo("");
  };

  const handleDoneTodo = (clickedtodo) => {
    const index = listOfTodos.findIndex((todo) => todo.id === clickedtodo.id);
    console.log("clicked index", index);
    if (
      listOfTodos[index].checked == null ||
      listOfTodos[index].checked == false
    ) {
      listOfTodos[index].checked = true;
      listOfTodos[index].classCross = "cross label";
      // setCompletedTodoClass("cross label");
      // setTodoDoneClass("cross label");
      console.log("after checked", listOfTodos[index]);
    } else {
      listOfTodos[index].checked = false;
      listOfTodos[index].classCross = "disableCross label";
      // setCompletedTodoClass("disableCross label");
      // setTodoDoneClass("disableCross label");
      console.log("after unchecked", listOfTodos[index]);
    }
    setListOfTodos([...listOfTodos]);
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

  const handleOnDragEnd = (draggedTodo) => {
    const newOrderedTodoList = [...listOfTodos];
    const [reorderedTodo] = newOrderedTodoList.splice(
      draggedTodo.source.index,
      1
    );
    newOrderedTodoList.splice(draggedTodo.destination.index, 0, reorderedTodo);
    setListOfTodos(newOrderedTodoList);
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
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="todolists">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <ListOfTodos
                  listOfTodos={listOfTodos}
                  handleDoneTodo={(event) => handleDoneTodo(event)}
                  handleEdit={(event) => handleEdit(event)}
                  setEditAvailable={setEditAvailable}
                  // completedTodoClass={completedTodoClass}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );

  return pageModel;
}

export default App;
