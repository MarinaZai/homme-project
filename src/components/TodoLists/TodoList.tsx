import { TodoListType } from "../../types/types";
import { TodoListItem } from "./TodoListItem/TodoListItem";

export type TodoListPropsType = {
  todolists: TodoListType[];
  getTodolists: (todolists: TodoListType[]) => void;
};

export const TodoList: React.FC<TodoListPropsType> = ({
  todolists,
  getTodolists,
}) => {
  return (
    <div>
      {todolists.map((todolist) => (
        <TodoListItem
          key={todolist.id}
          todolist={todolist}
          todolists={todolists} 
          getTodolists={getTodolists}
        />
      ))}
    </div>
  );
};
