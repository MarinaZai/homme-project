import "./App.css";
import { MainPage } from "./pages/MainPage";
import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ProfilePage } from "./pages/ProfilePage";
import { OneTodoListPage } from "./pages/OneTodoListPage";
import { LoginPage } from "./pages/LoginPage";
import type { TaskType, TodoListType } from "./types/types";
import { RegistrationPage } from "./pages/RegistrationPage";

export const App = ()=> {
  const [todolists, setTodolists] = useState<TodoListType[]>([]);
  const [tasks, setTasksList] = useState<TaskType[]>([]);
  
  const getTodolists = (newTodolists: TodoListType[]) => {
    setTodolists(newTodolists)
  }

  const getTasksList = (newTasks: TaskType[]) => {
    setTasksList(newTasks)
  }

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage todolists={todolists} getTodolists={getTodolists} />}/>
      <Route path="/registration" element={<RegistrationPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/profile" element={<ProfilePage />}/>
      <Route path="/mytodo/:id" element={<OneTodoListPage tasks={tasks} getTasksList={getTasksList}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
};
