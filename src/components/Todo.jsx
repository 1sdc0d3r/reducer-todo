import React from "react";

export const Todo = ({ todo }) => {
  return (
    <li
      id={todo.id}
      onClick={evt => console.log("mark complete", evt.target.id)}
    >
      Item: {todo.item} Completed: {JSON.stringify(todo.completed)}
    </li>
  );
};
