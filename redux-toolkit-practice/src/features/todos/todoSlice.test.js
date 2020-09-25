import todos, { addTodo, toggleTodo } from "./todosSlice";
import { setVisibilityFilter } from "../visibleTodoList/visibleTodoListSlice";

// it("should handle ADD TODO", () => {
//   expect(
//     todos([], {
//       type: addTodo.type,
//       payload: {
//         text: "Run the tests",
//         id: 0,
//       },
//     })
//   ).toEqual([]);
// });

describe("todo actions", () => {
  it("addTodo should create ADD_TODO action", () => {
    expect(addTodo("Use Redux")).toEqual({
      type: addTodo.type,
      payload: {
        text: "Use Redux",
        id: 0,
      },
    });
  });

  it("setVisibilityFilter should create SET_VISIBILITY_FILTER action", () => {
    expect(setVisibilityFilter("SHOW_ALL")).toEqual({
      type: setVisibilityFilter.type,
      payload: "SHOW_ALL",
    });
  });

  it("toggleTodo should create TOGGLE_TODO action", () => {
    expect(toggleTodo(0)).toEqual({
      type: toggleTodo.type,
      payload: 0,
    });
  });
});
