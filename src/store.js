import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import columnReducer from "./features/columnSlice";
import taskReducer from "./features/taskSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  column: columnReducer,
  task: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);
export { store, persistedStore };
