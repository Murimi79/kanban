import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ColumnState {
  status: string;
  id: number;
}
export type ColumnType = Array<ColumnState>;

const initialState: ColumnType = [];

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    addColumn: function (state, action) {
      state.push(action.payload);
    },
    updateColumn: function (
      state,
      { payload: { id, status } }: PayloadAction<{ id: number; status: string }>
    ) {
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
