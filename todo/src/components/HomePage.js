import React, { useState } from "react";

const HomePage = ({ todo, handleTodo, handleBtn }) => {
  const page = (
    <>
      <form>
        <input
          type="text"
          value={todo}
          onChange={(event) => handleTodo(event)}
        />
        <button type="submit" onClick={handleBtn}>
          submit
        </button>
      </form>
    </>
  );

  return <div>{page}</div>;
};

export default HomePage;
