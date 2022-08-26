import { Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormSendTodolist } from "../components/FormSendTodolist/FormSendTodolist";
import Header from "../components/Header/Header";
import { TodoList } from "../components/TodoLists/TodoList";
import { apiURL } from "../constans";
import type { TodolistBodyType, TodoListType } from "../types/types";

export type MainPagePropsType = {
 // deleteTaskWithTodolist: (todolistId: number) => void;
  todolists: TodoListType[];
  getTodolists: (todolists: TodoListType[]) => void;
};

export const MainPage: React.FC<MainPagePropsType> = ({
  todolists,
  getTodolists,
}) => {
  const getTodoListOnMainPage = () => {
    let token = localStorage.getItem("token");
    axios
      .get(`${apiURL}/todos?pageNumber=1&pageSize=5`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const items = response.data.items;
        getTodolists(items);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const todolistHandler = (body: TodolistBodyType) => {
    let token = localStorage.getItem("token");
    axios
      .post(`${apiURL}/todos`, body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 201) {
          getTodoListOnMainPage();
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  useEffect(() => {
    getTodoListOnMainPage();
  }, []);

  const [currentPage, setCurrentPage] = useState(1)
  
  return (
    <div>
      <Header />
      <FormSendTodolist
        todolistHandler={todolistHandler}
      />
      <TodoList
        todolists={todolists}
        getTodolists={getTodolists}
      />
      <Pagination
        count={10}
        size="large"
        variant="outlined"
        color="secondary"
      />
    </div>
  );
};
