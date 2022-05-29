import { createSignal } from "solid-js";

export default function TodoForm(props) {
  const [text, setText] = createSignal("");
  return (
    <form
      onSubmit={() => {
        props.addTodo(text()), setText("");
      }}
    >
      <input
        type="text"
        value={text()}
        placeholder="What will you do?"
        onInput={(e) => setText(e.target.value)}
      />
    </form>
  );
}
