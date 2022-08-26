import {
  ClickAwayListener,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { green, red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import type { TaskType } from "../../../types/types";

interface TasksListItemProps {
  task: TaskType;
  deleteTask: (id: number) => void;
  checkedTask: (id: number) => void;
  editTask: (id: number) => void;
  editTaskId: number | null;
  updateTask: (id: number, name: string) => void;
}

export const TasksListItem: React.FC<TasksListItemProps> = ({
  task,
  deleteTask,
  checkedTask,
  editTask,
  editTaskId,
  updateTask
}) => {
  const [inputValue, setInputValue] = useState(task.title);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  
  const notChecked = () => {
    if (task.id === editTaskId) {
      return;
    } else {
      checkedTask(task.id);
    }
  };
 
  return (
    <Paper
      elevation={3}
      sx={{
        overflowWrap: "anywhere",
        marginTop: "15px",
        maxWidth: "400px",
        padding: "20px 28px",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        gap: 2,
        opacity: task.isDone ? 0.3 : 1,
      }}
    >
      <Box>
        <Typography
          onClick={() => notChecked()}
          sx={{
            cursor: "pointer",
            textDecoration: task.isDone ? "line-through" : "none",
            fontSize: 20,
          }}
          variant="h4"
          gutterBottom
        >
          {editTaskId === task.id ? (
            <ClickAwayListener
              onClickAway={(e) => {
                updateTask(task.id, inputValue)
              }}
            >
              <TextField value={inputValue} onChange={onChange} />
            </ClickAwayListener>
          ) : (
            task.title
          )}
        </Typography>
      </Box>
      <Box>
        <IconButton
          onClick={() => deleteTask(task.id)}
          sx={{ color: red[500] }}
          aria-label="delete"
          size="small"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => editTask(task.id)}
          sx={{ color: green[500] }}
          aria-label="edit"
          size="small"
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </Box>
    </Paper>
  );
};
