import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./features/todo/todoSlice";
import { loadState, saveState } from "./services/localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    todo: store.getState().todo,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
