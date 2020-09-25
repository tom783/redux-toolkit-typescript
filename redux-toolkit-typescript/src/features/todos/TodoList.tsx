import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodoFilter } from "../../selector";
import { toggleTodo } from "./todosSlice";
import Todo from "./Todo";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(selectTodoFilter);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleTodo(todo.id))}
        />
      ))}
    </ul>
  );
};

export default TodoList;
