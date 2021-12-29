import React from "react";

const Todo = ({ eachTodo }) => {
  return (
    <>
      <input type="text" id="todoList" name={eachTodo}>
        {eachTodo.text}
      </input>
    </>
  );
};

export default Todo;
