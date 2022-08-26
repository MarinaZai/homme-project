import {
  Box,
  Checkbox,
  ClickAwayListener,
  IconButton,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { green, red } from "@mui/material/colors";
import { useState } from "react";
import { TodoListType } from "../../../types/types";

export type TodoListItemPropsType = {
  todolist: TodoListType;
  todolists: TodoListType[];
  getTodolists: (todolists: TodoListType[]) => void;
};

export const TodoListItem: React.FC<TodoListItemPropsType> = ({
  todolist,
  todolists,
  getTodolists,
}) => {
  
  const [inputValue, setInputValue] = useState(todolist.title);
  const [editTodolistId, setEditTodolistId] = useState<number | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const updateTodolist = (id: number, name: string) => {
    const newTodolistList = todolists.map((todolist) => {
      if (id === todolist.id) {
        todolist.title = name;
        return todolist;
      } else {
        return todolist;
      }
    });
    getTodolists(newTodolistList);
    setEditTodolistId(null);
  };

  const editTodolist = (id: number) => {
    setEditTodolistId(id);
  };

  const deleteTodolist = (id: number) => {
    getTodolists(todolists.filter((todolist) => todolist.id !== id));
  };

  const onCheckedTodolist = (id: number) => {
    getTodolists(
      todolists.map((todolist) => {
        if (todolist.id === id) {
          return { ...todolist, checked: !todolist.isDone };
        }
        return todolist;
      })
    );
  };

  //checkbox мой
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <Box
        sx={{
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <div key={todolist.id}>
          <Box
            sx={{
              marginTop: "15px",
              maxWidth: "380px",
              padding: "10px 15px",
              borderRadius: 2,
              display: "flex",
              alignContent: "center",
            }}
          >
            <Checkbox
              checked={todolist.isDone}
              onClick={() => onCheckedTodolist(todolist.id)}
              {...label}
              sx={{
                color: red[500],
                "&.Mui-checked": {
                  color: red[500],
                },
              }}
            />

            {editTodolistId === todolist.id ? (
              <ClickAwayListener
                onClickAway={(e) => {
                  updateTodolist(todolist.id, inputValue);
                }}
              >
                <TextField value={inputValue} onChange={onChange} />
              </ClickAwayListener>
            ) : (
              <NavLink
                to={`/mytodo/${todolist.id}`}
                style={{
                  padding: 13,
                  textDecoration: "none",
                  fontSize: 30,
                  background: "#311b92",
                  color: "white",
                  opacity: todolist.isDone ? 0.6 : 1,
                }}
              >
                {todolist.title}
              </NavLink>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <IconButton
                onClick={() => deleteTodolist(todolist.id)}
                sx={{ color: red[500] }}
                aria-label="delete"
                size="small"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              <IconButton
                onClick={() => editTodolist(todolist.id)}
                sx={{ color: green[500] }}
                aria-label="edit"
                size="small"
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
};
