import React from "react";

export const Todo = ({ todo }) => {
  return (
    <li>
      Item: {todo.item} Completed: {JSON.stringify(todo.completed)}
    </li>
  );
};
