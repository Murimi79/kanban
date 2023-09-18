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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
