import { createSlice } from "@reduxjs/toolkit";

export const columnSlice = createSlice({
  name: "column",
  initialState: [],
  reducers: {
    addColumn: function (state, action) {
      state.push(action.payload);
    },
  },
});

export const { addColumn } = columnSlice.actions;
export default columnSlice.reducer;
