import React, { useState } from "react";
import { Grid, IconButton, TextField } from "@material-ui/core";

import { useDispatch } from "react-redux";

import { addTodo } from "../features/todo/todoSlice";

import AddIcon from "@material-ui/icons/Add";

function AddTodo() {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");

  function addTodoInput_ChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setTodoText(event.target.value);
  }

  function addTodo_SubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    dispatch(addTodo({ text: todoText, complete: false }));
  }
  return (
    <form onSubmit={addTodo_SubmitHandler}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={2}>
          <IconButton
            // edge="end"
            aria-label="delete"
            onClick={() =>
              dispatch(addTodo({ text: todoText, complete: false }))
            }
          >
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="addTodo"
            placeholder="New Todo"
            onChange={addTodoInput_ChangeHandler}
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default AddTodo;
