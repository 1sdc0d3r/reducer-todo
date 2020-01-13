import React, { useState } from "react";

export const TodoForm = () => {
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
    console.log(input.input);
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
