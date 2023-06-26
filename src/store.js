import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "./components/columnSlice";
import taskReducer from "./components/taskSlice";

export default configureStore({
  reducer: {
    column: columnReducer,
    task: taskReducer,
  },
});
