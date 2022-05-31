import { styled } from "solid-styled-components";

const Counter = styled("p")`
  padding-bottom: 2rem;
`;

export default function TodoCounter(props) {
  return (
    <Counter>
      {`${props.todos.filter((todo) => todo.completed === true).length} /
            ${props.todos.length}`}
    </Counter>
  );
}
