import React from "react";
import EachTodo from "./EachTodo";
import { Draggable } from "react-beautiful-dnd";

const listOfTodos = ({
  listOfTodos,
  handleDelete,
  handleEdit,
  setEditAvailable,
  isChecked,
  todoDoneClass,
}) => {
  let page;
  if (listOfTodos.length !== 0) {
    page = (
      <ul className="no-bullet-point">
        {listOfTodos.map((eachTodo, index) => (
          <li className="editForm" key={eachTodo.id}>
            <Draggable
              key={eachTodo.id}
              draggableId={eachTodo.id}
              index={index}
            >
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <EachTodo
                    eachTodo={eachTodo}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    setEditAvailable={setEditAvailable}
                    listOfTodos={listOfTodos}
                    isChecked={isChecked}
                    todoDoneClass={todoDoneClass}
                  />
                </div>
              )}
            </Draggable>
          </li>
        ))}
      </ul>
    );
  } else {
    page = (
      <div className="text-center">
        <h3>Please add something for your todo list!</h3>
      </div>
    );
  }
  return <>{page}</>;
};

export default listOfTodos;
