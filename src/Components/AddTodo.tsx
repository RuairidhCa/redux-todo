import React, { useState } from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { IconButton, Paper, InputBase, Divider } from "@material-ui/core";

import { useDispatch } from "react-redux";

import { addTodo } from "../features/todo/todoSlice";

import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "10px",
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

function AddTodo() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");

  function addTodoInput_ChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setTodoText(event.target.value);
  }

  function validateAndDispatch() {
    if (todoText !== "") {
      dispatch(addTodo({ text: todoText, complete: false }));
    }
  }

  function addTodo_SubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    validateAndDispatch();
  }

  function addTodo_ClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    validateAndDispatch();
  }

  return (
    <Paper
      onSubmit={addTodo_SubmitHandler}
      component="form"
      className={classes.root}
    >
      <InputBase
        className={classes.input}
        placeholder="New Todo"
        onChange={addTodoInput_ChangeHandler}
        inputProps={{ "aria-label": "new todo" }}
        fullWidth
      />
      <Divider orientation="vertical" className={classes.divider} />
      <IconButton
        color="primary"
        aria-label="add"
        onClick={addTodo_ClickHandler}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
}

export default AddTodo;
