import { Dispatch, createContext } from "react";
import { Task, TasksAction } from "./TasksProvider";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TasksAction>;
}

const TasksContext = createContext<TasksContextType>({} as TasksContextType);

export default TasksContext;
