import React, { useState, useContext } from "react";

// Contexts
import { InitialContext } from "../contexts/InitialContext";

export const TodoForm = () => {
  const { dispatch } = useContext(InitialContext);

  const [input, setInput] = useState({
    input: ""
  });

  const onChangeHandler = evt => {
    setInput({
      [evt.target.name]: evt.target.value
    });
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    setInput({
      input: ""
    });

    if (input.input !== "") {
      return dispatch({ type: "ADD_TODO", payload: input.input });
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="todo"
        name="input"
        onChange={onChangeHandler}
        value={input.input}
      />
      <button type="submit">Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};
