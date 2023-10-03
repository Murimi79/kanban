import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TaskState {
  columnId: string;
  id: number;
}

export type TaskType = Array<TaskState>;
const initialState: TaskType = [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: function (state, action) {
      action.payload.id = state.length + 1;
      state.push(action.payload);
    },
    clearTasks: function (state, action: PayloadAction<string>) {
      return state.filter((t) => t.columnId !== action.payload);
    },
    updateTaskColumn: function (
      state,
      {
        payload: { status, columnId, taskId },
      }: PayloadAction<{ status: string; columnId: string; taskId: string }>
    ) {
      return state.map((t) => {
        if (t.id === +taskId) {
          return { ...t, status, columnId: columnId };
        }
        return t;
      });
    },
  },
});

export const { addTask, updateTaskColumn, clearTasks } = taskSlice.actions;
export default taskSlice.reducer;
