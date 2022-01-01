/* eslint-disable */
import React, { useState } from "react";

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
        <button className="button-submit" type="submit" onClick={handleBtn}>
          submit
        </button>
      </form>
    </div>
  );

  return <div>{page}</div>;
};

export default HomePage;
