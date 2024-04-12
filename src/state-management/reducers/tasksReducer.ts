export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

export type TasksAction = AddTask | DeleteTask;

const tasksReducer = (state: Task[], action: TasksAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...state];
    case "DELETE":
      return state.filter((task) => task.id !== action.taskId);
    default:
      return state;
  }
};

export default tasksReducer;
