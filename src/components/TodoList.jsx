import React, { useContext } from "react";
import { InitialContext } from "../contexts/InitialContext";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { state } = useContext(InitialContext);
  // console.log(state)

  return (
    <ul>
      {state.todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
