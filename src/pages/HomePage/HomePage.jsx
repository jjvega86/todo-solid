import useTodoStore from "../../store/useTodoStore";

import TodoContainer from "../../components/TodoContainer/TodoContainer";
import TodoForm from "../../components/TodoForm/TodoForm";

export default function HomePage(props) {
  const [state, dispatch] = useTodoStore();

  return (
    <div class="container">
      <h1>Hello {props.session.user.email}!</h1>
      <TodoForm dispatch={dispatch} />
      <TodoContainer todos={state.todos} dispatch={dispatch} />
    </div>
  );
}
