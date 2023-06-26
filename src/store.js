import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "./components/columnSlice";

export default configureStore({
  reducer: {
    column: columnReducer,
  },
});
