import React, { useState } from "react";
import ListOfTodos from "./ListOfTodos";

const HomePage = () => {
  const [todo, setTodo] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);
  const handleTodo = (event) => {
    setTodo(event.target.value);
  };

  const submitTodo = (event) => {
    event.preventDefault();
    setListOfTodos([...listOfTodos, todo]);
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
        <ListOfTodos listOfTodos={listOfTodos} />
      </form>
    </>
  );

  return <div>{page}</div>;
};

export default HomePage;
