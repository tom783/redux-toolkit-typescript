import { createSelector } from "@reduxjs/toolkit";
import { filterType } from "./features/filters/filterSlice";
import { Todo } from "./features/todos/todosSlice";

export interface State {
  todos: Todo[];
  filter: string;
}

const selectTodo = (state: State) => state.todos;
const selectFilter = (state: State) => state.filter;

export const selectTodoFilter = createSelector(
  [selectTodo, selectFilter],
  (todos: Todo[], filter: string) => {
    switch (filter) {
      case filterType.SHOW_ALL:
        return todos;
      case filterType.SHOW_COMPLETED:
        return todos.filter((t: Todo) => t.completed);
      case filterType.SHOW_ACTIVE:
        return todos.filter((t: Todo) => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  }
);
