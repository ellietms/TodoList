/* eslint-disable */
import React, { useState } from "react";

// I would kind of expect a HomePage to be a whole page, not just a single text box and form - maybe there's a better name for this component?
// It's not particularly clear what each of these props is for. What's a todo to be handled? Does it mean a new todo? What's the btn? What does the btn do? What's a todo? If the point of this component is to show a list of todos, it seems strange to have a prop which is a single todo?
const HomePage = ({ todo, handleTodo, handleBtn }) => {
  const page = (
    <div>
      <form className="form-container">
        <input
          className="input-container"
          type="text"
          value={todo}
          onChange={(event) => handleTodo(event)}
        />
        {/* submit doesn't seem like the verb I'd associate with this action - can you think of a better word? */}
        <button className="button-submit" type="submit" onClick={handleBtn}>
          submit
        </button>
      </form>
    </div>
  );

  return <div>{page}</div>;
};

export default HomePage;
