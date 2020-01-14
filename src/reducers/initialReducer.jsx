const newTodo = todo => {
  return {
    item: todo,
    completed: false,
    id: Date.now()
  };
};

const markComplete = (state, id) => {
  const task = state.todos.find(e => {
    return e.id == id;
  });
  task.completed = !task.completed;
  return task;
};

const initialReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // console.log("ADD_TODO", "state", state, "action", action);
      return { ...state, todos: [...state.todos, newTodo(action.payload)] };
    case "TOGGLE_COMPLETED":
      markComplete(state, action.payload);
      return {
        ...state
      };
    case "CLEAR_TODOS":
      return {
        ...state,
        todos: [...state.todos]
      };
    default:
      return state;
  }
};

const initialState = {
  todos: [
    {
      item: "todo 1",
      completed: false,
      id: Math.random()
    },
    {
      item: "todo 2",
      completed: false,
      id: Math.random()
    },
    {
      item: "todo 3",
      completed: false,
      id: Math.random()
    },
    {
      item: "todo 4",
      completed: false,
      id: Math.random()
    },
    {
      item: "todo 5",
      completed: false,
      id: Math.random()
    }
  ]
};

export { initialReducer, initialState };
