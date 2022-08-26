import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";


interface FormSendTaskProps {
  addTask: (name: string) => void;
}
export const FormSendTask: React.FC<FormSendTaskProps> = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const onButtonAddClick = () => {
    addTask(inputValue);
    setInputValue("");
  };
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        marginTop: "15px",
        maxWidth: "400px",
        padding: "20px 28px",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center"
      }}
    >
      <TextField
        value={inputValue}
        onChange={onChange}
        label="Task name"
        error={inputValue.trim() === ""}
       helperText={inputValue.length === 0 ? 'Add your task': false}
      />
      <Button
        onClick={onButtonAddClick}
        variant="contained"
        style={{ background: "#311b92" }}
      >
        + Add
      </Button>
    </Paper>
  );
};
