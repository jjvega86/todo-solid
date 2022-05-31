import Todo from "../Todo/Todo";
import { For } from "solid-js";
export default function TodoList(props) {
  return (
    <For
      each={props.todos.filter((todo) => todo.completed === props.filterType)}
    >
      {(todo) => (
        <Todo
          text={todo.text}
          completed={todo.completed}
          id={todo.id}
          dispatch={props.dispatch}
        />
      )}
    </For>
  );
}
