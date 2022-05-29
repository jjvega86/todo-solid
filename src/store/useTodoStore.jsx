import { createStore } from "solid-js/store";

export default function useTodoStore() {
  const [state, setState] = createStore({
    todos: [],
  });

  const actions = {
    addTodo: ({ text }) => {
      setState("todos", (todos) => [
        ...todos,
        { id: todos.length, text, completed: false },
      ]);
    },
    toggleTodo: ({ id }) => {
      setState(
        "todos",
        (todo) => todo.id === id,
        "completed",
        (c) => !c
      );
    },
    editTodo: ({ id, newText }) => {
      setState("todos", (todo) => todo.id == id, "text", newText);
    },
  };

  const dispatch = (action) => {
    switch (action.type) {
      case "ADD_TODO":
        actions.addTodo(action.payload);
        break;
      case "TOGGLE_TODO":
        actions.toggleTodo(action.payload);
        break;
      case "EDIT_TODO":
        actions.editTodo(action.payload);
      default:
        alert(`Invalid action type: ${action.type}`);
    }
  };

  // const addTodo = (text) => {
  //   setState("todos", (todos) => [
  //     ...todos,
  //     { id: todos.length, text, completed: false },
  //   ]);
  // };

  // const toggleTodo = (id) => {
  //   setState(
  //     "todos",
  //     (todo) => todo.id === id,
  //     "completed",
  //     (c) => !c
  //   );
  // };

  // const editTodo = (id, newText) => {
  //   setState("todos", (todo) => todo.id == id, "text", newText);
  // };

  return [state, dispatch];
}
