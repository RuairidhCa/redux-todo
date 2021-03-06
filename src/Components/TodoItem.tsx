import React from "react";
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core/";
import { DeleteOutline as DeleteIcon } from "@material-ui/icons/";

import { useDispatch } from "react-redux";

import { removeTodo, toggleComplete } from "../features/todo/todoSlice";

interface ITodoItemProps {
  index: number;
  todo: { text: string; complete: boolean };
}

function TodoItem({ index, todo }: ITodoItemProps) {
  const dispatch = useDispatch();

  function listItem_ClickHandler() {
    dispatch(toggleComplete({ index }));
  }

  function deleteButton_ClickHandler() {
    dispatch(removeTodo({ index }));
  }

  return (
    <ListItem button onClick={listItem_ClickHandler}>
      <ListItemIcon>
        <Checkbox color="primary" checked={todo.complete} />
      </ListItemIcon>
      <ListItemText id={`todo-${index}`} primary={todo.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="delete" onClick={deleteButton_ClickHandler}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
