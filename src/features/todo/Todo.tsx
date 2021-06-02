import React from "react";

import { useSelector } from "react-redux";
import { selectTodos } from "./todoSlice";

import TodoList from "../../Components/TodoList";
import AddTodo from "../../Components/AddTodo";
import { Container } from "@material-ui/core";

export default function Todo() {
  const todos = useSelector(selectTodos);

  return (
    <Container>
      <TodoList todos={todos} />

      <AddTodo />
    </Container>
  );
}
