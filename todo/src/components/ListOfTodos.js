import React from "react";
import Todo from "./EachTodo";

const listOfTodos = ({ listOfTodos }) => {
  let page;
  if (listOfTodos.length !== 0) {
    page = (
      <ul>
        {listOfTodos.map((eachTodo) => (
          <li key={eachTodo.id}>
            <Todo eachTodo={eachTodo} />
          </li>
        ))}
      </ul>
    );
  } else {
    page = (
      <>
        <h3>Please add something for your todo list!</h3>
      </>
    );
  }
  return <>{page}</>;
};

export default listOfTodos;
