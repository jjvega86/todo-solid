import { createSignal } from "solid-js";

export default function Todo(props) {
  const [toggle, setToggle] = createSignal(false);
  const [modifiedText, setModifiedText] = createSignal(props.text);

  const handleClick = (e) => {
    if (e.detail === 2) {
      setToggle((prev) => !prev);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
    props.dispatch({
      type: "EDIT_TODO",
      payload: { id: props.id, newText: modifiedText() },
    });
  };

  return (
    <div>
      <p onClick={handleClick}>
        <span
          style={{
            "text-decoration": props.completed ? "line-through" : "none",
          }}
        >
          {toggle() ? (
            <form onSubmit={handleSubmit}>
              <input
                style={{ display: "inline" }}
                type="text"
                value={modifiedText()}
                onInput={(e) => setModifiedText(e.target.value)}
              />
            </form>
          ) : (
            <div>
              {" "}
              <input
                type="checkbox"
                checked={props.completed}
                onChange={() =>
                  props.dispatch({
                    type: "TOGGLE_TODO",
                    payload: { id: props.id },
                  })
                }
              />
              {props.text}
            </div>
          )}
        </span>
      </p>
    </div>
  );
}
