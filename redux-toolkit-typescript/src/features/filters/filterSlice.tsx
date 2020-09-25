import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterType {
  SHOW_ALL: string;
  SHOW_COMPLETED: string;
  SHOW_ACTIVE: string;
}

export const filterType: FilterType = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterType.SHOW_ALL,
  reducers: {
    setFilter: (state: string, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
