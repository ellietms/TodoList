import React from "react";
import EachTodo from "./EachTodo";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

const listOfTodos = ({
  listOfTodos,
  handleDelete,
  handleEdit,
  setEditAvailable,
  isChecked,
}) => {
  const Ellie = (event) => {
    console.log("Event", event);
  };
  let page;
  // if (listOfTodos.length !== 0) {
  try {
    page = (
      // {/* // <ul className="no-bullet-point"> */}
      // ref={provided.innerRef} {...provided.droppableProps}
      <ErrorBoundary>
        <DragDropContext onDragEnd={(event) => Ellie(event)}>
          {listOfTodos
            .sort((a, b) => (a.sort < b.sort ? 1 : -1))
            .map((eachTodo) => (
              <div className="editForm" key={eachTodo.id}>
                <EachTodo
                  eachTodo={eachTodo}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  setEditAvailable={setEditAvailable}
                  listOfTodos={listOfTodos}
                  isChecked={isChecked}
                />
              </div>
            ))}
        </DragDropContext>
      </ErrorBoundary>
    );
  } catch (error) {
    console.log("CATCH", error);
  }
  // }
  // {/* // </ul> */}
  // else {
  //   page = (
  //     <div>
  //       <h3>Please add something for your todo list!</h3>
  //     </div>
  //   );
  // }
  return <>{page}</>;
};

export default listOfTodos;
