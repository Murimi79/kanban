import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "./features/columnSlice";
import taskReducer from "./features/taskSlice";

export default configureStore({
  reducer: {
    column: columnReducer,
    task: taskReducer,
  },
});
