import React, { useState } from "react";
import ListTodo from "./ListTodo";

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
        <ListTodo listTodo={listTodo} />
      </form>
    </>
  );

  return <div>{page}</div>;
};

export default TodoList;
