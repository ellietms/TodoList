import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const handleTodo = (event) => {
    setTodo(event.target.value);
  };
  const submitTodo = (event) => {
    event.preventDefault();
    setListTodo([...listTodo, todo]);
  };

  const page = (
    <>
      <form onSubmit={(event) => submitTodo(event)}>
        <input
          type="text"
          value={todo}
          onChange={(event) => handleTodo(event)}
        />
        <button type="submit">submit</button>
        {listTodo.length !== 0 && (
          <div>
            <h3> My Todolist</h3>
            {listTodo.map((eachTodo, index) => (
              <div key={index}>
                <input type="checkbox" id="todoList" name={eachTodo}>
                  <label for={eachTodo}> {eachTodo} </label>
                </input>
              </div>
            ))}
          </div>
        )}
      </form>
    </>
  );

  return <div>{page}</div>;
};

export default TodoList;
