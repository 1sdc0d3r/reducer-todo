const initialReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return console.log("ADD_TODO");
    case "TOGGLE_COMPLETED":
      console.log("TOGGLE_COMPLETED");
    case "CLEAR_TODOS":
      return console.log("CLEAR_TODOS");
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
