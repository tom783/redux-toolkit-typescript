import { createSlice } from "@reduxjs/toolkit";

let todoID = 0;

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // addTodo: (state, action) => {
    //   console.log("@@@@##!!", action);
    //   const { text } = action;
    //   state.push({ id: todoID++, text, completed: false });
    // },
    addTodo: {
      reducer: (state, action) => {
        const { id, text } = action.payload;
        state.push({ id, text, completed: false });
      },
      prepare: (text) => {
        return { payload: { text, id: todoID++ } };
      },
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
