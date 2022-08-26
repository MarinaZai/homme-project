import { TaskType } from "../../types/types";
import { DefaultValueOnPage } from "../DefaultValueOnPage/DefaultValueOnPage";
import { TasksList } from "../TasksList/TasksList";

interface ChangeImgOnTaskListProps {
    tasks: TaskType[];
    deleteTask: (id: TaskType["id"]) => void;
    checkedTask: (id: TaskType["id"]) => void;
    editTask: (id: TaskType["id"]) => void;
    editTaskId: number | null
    updateTask: (id: number, name: string) => void;
  }

export const ChangeImgOnTaskList: React.FC<ChangeImgOnTaskListProps> = ({
    tasks,
    deleteTask,
    checkedTask,
    editTask,
    editTaskId, 
    updateTask
  }) => {
    if (tasks.length === 0) {
        return <DefaultValueOnPage />;
      } else {
        return (
          <TasksList
            tasks={tasks}
            deleteTask={deleteTask}
            checkedTask={checkedTask}
            editTask={editTask}
            editTaskId={editTaskId}
            updateTask={updateTask}
          />
        );
      }

}
