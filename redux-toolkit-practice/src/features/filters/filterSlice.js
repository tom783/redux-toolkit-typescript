import { createSlice } from "@reduxjs/toolkit";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

const visibleTodoListSlice = createSlice({
  name: "visibilityFilter",
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = visibleTodoListSlice.actions;
export default visibleTodoListSlice.reducer;
