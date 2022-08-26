import { ControlPoint } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodolistBodyType, TodoListType } from "../../types/types";

export type FormSendTodolistPropsType = {
  todolistHandler: (todolist: TodolistBodyType) => void;
};

export const FormSendTodolist: React.FC<FormSendTodolistPropsType> = ({
  todolistHandler
}) => {
  const [inputValue, setInputValue] = useState("");

  let objectTodolist = {
    title: inputValue,
  };
 
  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const createTodolist = () => {
    if (inputValue.trim() === "") {
      return "";
    } else {
      todolistHandler(objectTodolist);
    }
    setInputValue("");
  };

  return (
    <div>
      <Box
        sx={{
          marginTop: "15px",
          maxWidth: "400px",
          padding: "20px 28px",
          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          value={inputValue}
          onChange={changeInputValue}
          variant={"outlined"}
          label={"Add todo name"}
          error={inputValue.trim() === ""}
          helperText={inputValue.length === 0 ? "Add your todo name" : false}
        />
        <IconButton onClick={createTodolist}>
          <ControlPoint />
        </IconButton>
      </Box>
    </div>
  );
};
