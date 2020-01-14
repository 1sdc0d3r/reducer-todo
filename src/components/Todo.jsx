import React, { useContext } from "react";
import { InitialContext } from "../contexts/InitialContext";

export const Todo = ({ todo }) => {
  const { dispatch } = useContext(InitialContext);

  return (
    <li
      className={todo.completed ? "completed" : ""}
      id={todo.id}
      onClick={evt => {
        return dispatch({ type: "TOGGLE_COMPLETED", payload: evt.target.id });
      }}
    >
      Item: {todo.item} Completed:{" "}
      {todo.completed ? "Completed" : "Not Completed"}
    </li>
  );
};
