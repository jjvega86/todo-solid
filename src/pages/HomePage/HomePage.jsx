import useTodoStore from "../../store/useTodoStore";

import TodoList from "../../components/TodoList/TodoList";
import TodoForm from "../../components/TodoForm/TodoForm";

export default function HomePage(props) {
  const [state, { addTodo, toggleTodo, editTodo }] = useTodoStore();

  return (
    <div class="container">
      <h1>Hello {props.session.user.email}!</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={state.todos} toggle={toggleTodo} edit={editTodo} />
    </div>
  );
}
