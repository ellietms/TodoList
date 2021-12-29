import React from "react";

const listOfTodos = ({ listOfTodos }) => {
  let page;
  if (listOfTodos.length !== 0) {
    page = (
      <div>
        <h3> My Todolist</h3>
        {listOfTodos.map((eachTodo, index) => (
          <div key={index}>
            <input type="checkbox" id="todoList" name={eachTodo}>
              <label for={eachTodo}> {eachTodo} </label>
            </input>
          </div>
        ))}
      </div>
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
