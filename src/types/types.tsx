export type TaskType = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  createdAt: string;
}; //OneTodoListPage

export type TodoListType = {
  createdAt: string;
  id: number;
  isDone: boolean;
  title: string;
}; //моя MainPage

export type TodolistBodyType = {
  title: string;
};

export type TaskBodyType ={
  title: string;
}