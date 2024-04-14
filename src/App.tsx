import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthProvider from "./state-management/authProvider";
import TasksContext from "./state-management/contexts/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
      <AuthProvider>
        <NavBar />
        <HomePage />
      </AuthProvider>
    </TasksContext.Provider>
  );
}

export default App;
