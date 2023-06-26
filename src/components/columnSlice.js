import { createSlice } from "@reduxjs/toolkit";

export const columnSlice = createSlice({
  name: "column",
  initialState: [],
  reducers: {
    addColumn: function (state, action) {
      state.push(action.payload);
    },
    updateColumn: function (state, { payload: { id, status } }) {
      console.log(id);
      const columnToUpdate = state.find((c) => c.id === id);
      if (columnToUpdate) {
        columnToUpdate.status = status;
      }
    },
    deleteColumn: function (state, { payload }) {
      return state.filter((c) => c.id !== payload);
    },
  },
});

export const { addColumn, updateColumn, deleteColumn } = columnSlice.actions;
export default columnSlice.reducer;
