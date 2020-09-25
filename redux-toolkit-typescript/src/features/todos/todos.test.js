import { addTodo, toggleTodo } from "./todosSlice";

describe("todos reducer", () => {
  it("should handle initial state", () => {
    expect(addTodo("test string")).toEqual({
      type: addTodo.type,
      payload: {
        id: 0,
        text: "test string",
      },
    });
  });

  it("should handle ADD_TODO", () => {
    expect(toggleTodo(0)).toEqual({
      type: toggleTodo.type,
      payload: 0,
    });
  });
});
