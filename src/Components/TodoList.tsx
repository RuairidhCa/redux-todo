import React from "react";
import List from "@material-ui/core/List";

import TodoItem from "./TodoItem";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

interface ITodoListProps {
  todos: { text: string; complete: boolean }[];
}

function TodoList({ todos }: ITodoListProps) {
  function getListContent() {
    if (todos.length === 0) {
      return (
        <ListItem>
          <ListItemIcon>
            <DoneIcon />
          </ListItemIcon>
          <ListItemText>Nothing to do!</ListItemText>
        </ListItem>
      );
    }
    return todos.map((todo, index) => {
      return <TodoItem key={index} index={index} todo={todo} />;
    });
  }
  return <List>{getListContent()}</List>;
}

export default TodoList;
