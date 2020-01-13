import React, { useState, useContext, useReducer } from "react";
// Reducers
import { initialReducer, initialState } from "../reducers/initialReducer";
// Contexts
import { InitialContext } from "../contexts/InitialContext";

export const TodoForm = () => {
  const { todos } = useContext(InitialContext);
  const [state, dispatch] = useReducer(initialReducer, initialState);
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
    // initialReducer(todos, { type: "ADD_TODO", input: input.input });
    // dispatch({ type: "TOGGLE_COMPLETED" })
    // dispatch(initialReducer(todos, { type: "ADD_TODO", input: input.input }));

    setInput({
      input: ""
    });
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
    </form>
  );
};
