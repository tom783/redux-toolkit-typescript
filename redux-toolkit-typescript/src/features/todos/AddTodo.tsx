import React, { Dispatch, SyntheticEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

const AddTodo: React.FC = () => {
  // let input: SyntheticEvent<EventTarget>;

  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch: Dispatch<unknown> = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputRef.current?.value.trim()) {
            return;
          }
          dispatch(addTodo(inputRef.current?.value));
          inputRef.current.value = "";
        }}
      >
        <input ref={inputRef} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
