import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type TodoState = { text: string; complete: boolean }[];

const initialState: TodoState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      console.log(action.payload);
      return state.filter((todo, index) => index !== action.payload.index);
    },
    toggleComplete: (state, action) => {
      state[action.payload.index].complete = !state[action.payload.index]
        .complete;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo;

export default todoSlice.reducer;
