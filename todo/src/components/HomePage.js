/* eslint-disable */
import React from "react";

const HomePage = ({ newTodo, handleTodo, handleBtn }) => {
  const page = (
    <div>
      <form className="form-container">
        <input
          className="input-container"
          type="text"
          value={newTodo}
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
