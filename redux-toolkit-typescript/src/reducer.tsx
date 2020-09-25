import { combineReducers } from "redux";
import todos from "./features/todos/todosSlice";
import filter from "./features/filters/filterSlice";

export default combineReducers({
  todos,
  filter,
});
