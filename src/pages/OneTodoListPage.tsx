import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormSendTask } from "../components/FormSendTask/FormSendTask";
import Header from "../components/Header/Header";
import { ChangeImgOnTaskList } from "../components/СhangeImgOnTaskList/СhangeImgOnTaskList";
import { apiURL } from "../constans";
import type { TaskBodyType, TaskType } from "../types/types";

export type OneTodoListPageType = {
  tasks: TaskType[];
  getTasksList: (tasks: TaskType[]) => void;
};

export const OneTodoListPage: React.FC<OneTodoListPageType> = ({
  tasks,
  getTasksList,
}) => {

  const params = useParams();
  const pathId = params.id;
  let pathIdNumber = Number(pathId);

  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  const updateTask = (id: number, name: string) => {
    const newTasksList = tasks.map((task) => {
      if (id === task.id) {
        task.title = name;
        return task;
      } else {
        return task;
      }
    });
    getTasksList(newTasksList);
    setEditTaskId(null);
  };

  const editTask = (id: number) => {
    setEditTaskId(id);
  };

  const deleteTask = (id: number) => {
    getTasksList(tasks.filter((task) => task.id !== id));
  };

  const addTask = (name: string) => {
    if (name.trim() === "") {
      return "";
    } else {
      onSaveTaskHandler({title:name})
    }
  };

  const checkedTask = (id: number) => {
    getTasksList(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, checked: !task.isDone };
        }
        return task;
      })
    );
  };

  const getTasks = () => {
    const token = localStorage.getItem("token");
    axios.get(`${apiURL}/todos/${pathIdNumber}/tasks?pageNumber=1&pageSize=5`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      const tasks = response.data.items;
      console.log(tasks)
      getTasksList(tasks);
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
  };

  const onSaveTaskHandler = (body: TaskBodyType) => {
    let token = localStorage.getItem("token");
    axios
      .post(`${apiURL}/todos/${pathIdNumber}/tasks`, body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 201) {
          getTasks();
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
        <Box>
          <FormSendTask addTask={addTask} />
          <ChangeImgOnTaskList
            tasks={tasks}
            deleteTask={deleteTask}
            checkedTask={checkedTask}
            editTask={editTask}
            editTaskId={editTaskId}
            updateTask={updateTask}
          />
        </Box>
      </Box>
    </div>
  );
};
