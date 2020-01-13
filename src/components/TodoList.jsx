import React, { useContext } from "react";
import { InitialContext } from "../contexts/InitialContext";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos } = useContext(InitialContext);

  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
