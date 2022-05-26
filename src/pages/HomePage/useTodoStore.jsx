import { createStore } from "solid-js/store";

export default function useTodoStore() {
  const [todos, setTodos] = createStore([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      (todo) => todo.id === id,
      "completed",
      (completed) => !completed
    );
  };

  return [todos, { addTodo, toggleTodo }];
}
