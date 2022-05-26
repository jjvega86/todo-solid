import useTodoStore from "./useTodoStore";

import TodoList from "../../components/TodoList/TodoList";
import TodoForm from "../../components/TodoForm/TodoForm";

export default function HomePage(props) {
  const [todos, { addTodo, toggleTodo }] = useTodoStore();

  return (
    <div class="container">
      <h1>Hello {props.session.user.email}!</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggle={toggleTodo} />
    </div>
  );
}
