import React from "react";
import EachTodo from "./EachTodo";
import { Droppable } from "react-beautiful-dnd";

const listOfTodos = ({
  listOfTodos,
  handleDelete,
  handleEdit,
  setEditAvailable,
  isChecked,
  ref,
}) => {
  let page;
  if (listOfTodos.length !== 0) {
    page = (
      <Droppable droppableId="droppable-1">
        {
          (provided, _) => (
            // {/* // <ul className="no-bullet-point"> */}
            <div ref={provided.innerRef} {...provided.droppableProps}>
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
            </div>
          )
          // {/* // </ul> */}
        }
      </Droppable>
    );
  } else {
    page = (
      <div>
        <h3>Please add something for your todo list!</h3>
      </div>
    );
  }
  return <>{page}</>;
};

export default listOfTodos;
