import React from "react";

import { useSelector } from "react-redux";
import { selectTodos } from "./todoSlice";

import TodoList from "../../Components/TodoList";
import AddTodo from "../../Components/AddTodo";
import {
  Container,
  createStyles,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "10px",
    },
  })
);

export default function Todo() {
  const todos = useSelector(selectTodos);
  const classes = useStyles();

  return (
    <Container>
      <Paper className={classes.root}>
        <TodoList todos={todos} />
      </Paper>
      <AddTodo />
    </Container>
  );
}
