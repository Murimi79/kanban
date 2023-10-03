import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Column {
  status: string;
  id: string;
}
export type ColumnType = Array<Column>;

const initialState: ColumnType = [];

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    addColumn: function (
      state,
      action: PayloadAction<{ status: string; id: string }>
    ) {
      state.push(action.payload);
    },
    updateColumn: function (
      state,
      { payload: { id, status } }: PayloadAction<{ id: string; status: string }>
    ) {
      const columnToUpdate = state.find((c) => c.id === id);
      if (columnToUpdate) {
        columnToUpdate.status = status;
      }
    },
    deleteColumn: function (state, { payload }: PayloadAction<string>) {
      return state.filter((c) => c.id !== payload);
    },
  },
});

export const { addColumn, updateColumn, deleteColumn } = columnSlice.actions;
export default columnSlice.reducer;
