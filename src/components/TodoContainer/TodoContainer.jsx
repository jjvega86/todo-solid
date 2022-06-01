import { Show } from "solid-js";
import { styled } from "solid-styled-components";

import TodoCounter from "../TodoCounter/TodoCounter";
import TodoList from "../TodoList/TodoList";

const Fallback = styled("p")`
  text-align: center;
`;

export default function TodoContainer(props) {
  return (
    <Show
      when={props.todos.length > 0}
      fallback={<Fallback>Awaiting your todos!</Fallback>}
    >
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
