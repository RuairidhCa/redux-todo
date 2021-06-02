import React from "react";
import List from "@material-ui/core/List";

import TodoItem from "./TodoItem";

interface ITodoListProps {
  todos: { text: string; complete: boolean }[];
}

function TodoList({ todos }: ITodoListProps) {
  return (
    <List>
      {todos.map((todo, index) => {
        return <TodoItem index={index} todo={todo} />;
      })}
    </List>
  );
}

export default TodoList;
