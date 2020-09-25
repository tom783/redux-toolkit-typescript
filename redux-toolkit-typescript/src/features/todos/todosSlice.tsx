import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let todoId: number = 0;

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type AddTodoPropsType = Pick<Todo, "id" | "text">;

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state: Todo[], action: PayloadAction<AddTodoPropsType>) => {
        const { id, text }: AddTodoPropsType = action.payload;
        const data: Todo = {
          id: id,
          text: text,
          completed: false,
        };
        state.push(data);
      },
      prepare: (text: string) => {
        return { payload: { id: todoId++, text } };
      },
    },
    toggleTodo: (state: Todo[], action: PayloadAction<number>) => {
      const todo: Todo | undefined = state.find(
        (i: Todo): boolean => i.id === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
