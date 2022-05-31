import { For, Show } from "solid-js";

import Todo from "../Todo/Todo";
import TodoCounter from "../TodoCounter/TodoCounter";
import TodoList from "../TodoList/TodoList";

export default function TodoContainer(props) {
  return (
    <Show when={props.todos.length > 0} fallback={<p>Awaiting your todos!</p>}>
      <article>
        <TodoCounter todos={props.todos} />
        <header>
          <TodoList
            todos={props.todos}
            dispatch={props.dispatch}
            filterType={false}
          />
        </header>
        <details>
          <summary>Completed Todos</summary>
          <TodoList
            todos={props.todos}
            dispatch={props.dispatch}
            filterType={true}
          />
        </details>
        <a onClick={() => props.dispatch({ type: "CLEAR_COMPLETED" })}>
          Clear Completed
        </a>
      </article>
    </Show>
  );
}
