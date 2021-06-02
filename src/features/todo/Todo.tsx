import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleComplete, selectTodos } from "./todoSlice";

import TodoList from "../../Components/TodoList";
import AddTodo from "../../Components/AddTodo";
import { Container } from "@material-ui/core";

export default function Todo() {
  const dispatch = useDispatch();

  const todos = useSelector(selectTodos);
  const todosList = todos.map((todo) => {
    return <div>{todo.text}</div>;
  });

  return (
    <Container>
      <TodoList todos={todos} />
      <AddTodo />
    </Container>
  );
}
