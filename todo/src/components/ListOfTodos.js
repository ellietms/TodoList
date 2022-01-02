import React from "react";
import Todo from "./EachTodo";

const listOfTodos = ({
  listOfTodos,
  handleDelete,
  handleEdit,
  setEditAvailable,
}) => {
  let page;
  if (listOfTodos.length !== 0) {
    page = (
      <ul className="no-bullet-point">
        {/* .sort((a, b) => (a.name > b.name ? 1 : -1)) */}
        {listOfTodos
          .sort((a, b) => (a.sort < b.sort ? 1 : -1))
          .map((eachTodo) => (
            <li className="editForm" key={eachTodo.id}>
              <Todo
                eachTodo={eachTodo}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                setEditAvailable={setEditAvailable}
                listOfTodos={listOfTodos}
              />
            </li>
          ))}
      </ul>
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
