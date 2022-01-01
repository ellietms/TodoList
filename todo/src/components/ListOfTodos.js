import React from "react";
import Todo from "./EachTodo";

const listOfTodos = ({ listOfTodos, handleDelete, handleEdit }) => {
  let page;
  if (listOfTodos.length !== 0) {
    page = (
      <ul className="no-bullet-point">
        {listOfTodos.map((eachTodo) => (
          <li key={eachTodo.id}>
            <Todo
              eachTodo={eachTodo}
              handleDelete={(eachTodo) => handleDelete(eachTodo)}
              handleEdit={handleEdit}
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
