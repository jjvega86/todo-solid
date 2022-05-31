import { For, Show } from "solid-js";
import Todo from "../Todo/Todo";
export default function TodoList(props) {
  return (
    <Show when={props.todos.length > 0} fallback={<p>Awaiting your todos!</p>}>
      <article>
        <header>
          <For each={props.todos.filter((todo) => todo.completed === false)}>
            {(todo) => (
              <Todo
                text={todo.text}
                completed={todo.completed}
                id={todo.id}
                dispatch={props.dispatch}
              />
            )}
          </For>
        </header>
        <details>
          <summary>Completed Todos</summary>
          <For each={props.todos.filter((todo) => todo.completed === true)}>
            {(todo) => (
              <Todo
                text={todo.text}
                completed={todo.completed}
                id={todo.id}
                dispatch={props.dispatch}
              />
            )}
          </For>
        </details>
      </article>
    </Show>
  );
}
