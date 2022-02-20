/* eslint-disable */
import React from "react";

const TodoCreator = ({ newTodo, handleNewTodo, addNewTodo }) => {
  const page = (
    <div>
      <form className="form-container">
        <input
          className="input-container"
          type="text"
          value={newTodo}
          onChange={(event) => handleNewTodo(event)}
        />
        <button className="button-submit" type="submit" onClick={addNewTodo}>
          Create
        </button>
      </form>
    </div>
  );

  return <div>{page}</div>;
};

export default TodoCreator;
