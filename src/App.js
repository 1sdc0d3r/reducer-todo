import React, { useReducer } from "react";

// components
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

// Reducers
import { initialState, initialReducer } from "./reducers/initialReducer";

// Contexts
import { InitialContext } from "./contexts/InitialContext";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(initialReducer, initialState);

  return (
    <div className="App">
      <InitialContext.Provider value={initialState}>
        <TodoForm />
        <TodoList />
      </InitialContext.Provider>
    </div>
  );
}

export default App;
