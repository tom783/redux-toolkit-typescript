import React from "react";

interface PropsType {
  onClick: () => {};
  completed: boolean;
  text: string;
}

const Todo: React.FC<PropsType> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

export default Todo;
