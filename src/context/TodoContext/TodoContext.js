import { createStore } from "solid-js/store";
import { createContext, useContext } from "solid-js";

const TodoContext = createContext();

export function TodoProvider(props) {
  const [todos, setTodos] = createStore([
    {
      id: 1,
      text: "Do some stuff",
      completed: false,
    },
    {
      id: 2,
      text: "Do some more stuff",
      completed: false,
    },
    {
      id: 3,
      text: "Rest",
      completed: false,
    },
  ]);

  store = [
    todos,
    {
      // addTodo, toggleTodo, deleteTodo, editTodo
    },
  ];
  return <TodoProvider value={store}>{props.children}</TodoProvider>;
}

export default function useTodos() {
  return useContext(TodoContext);
}
