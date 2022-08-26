import { Box } from "@mui/material";
import type { TaskType } from "../../types/types";
import { TasksListItem } from "./TasksListItem/TasksListItem";

interface TasksListProps {
  tasks: TaskType[];
  deleteTask: (id: TaskType["id"]) => void;
  checkedTask: (id: TaskType["id"]) => void;
  editTask: (id: TaskType["id"]) => void;
  editTaskId: number | null
  updateTask: (id: number, name: string) => void;
}
export const TasksList: React.FC<TasksListProps> = ({
  tasks,
  deleteTask,
  checkedTask,
  editTask,
  editTaskId, 
  updateTask
}) => {
  return (
    <Box>
      {tasks.map((task) => (
        <TasksListItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          checkedTask={checkedTask}
          editTask={editTask}
          editTaskId={editTaskId}
          updateTask={updateTask}
        />
      ))}
    </Box>
  );
};
