import { For } from "solid-js";
import Todo from "../Todo/Todo";
export default function TodoList(props) {
  return (
    <For each={props.todos}>
      {(todo) => <Todo text={todo.text} completed={todo.completed} />}
    </For>
  );
}
