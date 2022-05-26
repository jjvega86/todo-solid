export default function Todo(props) {
  return (
    <div>
      <p>
        <span
          style={{
            "text-decoration": props.completed ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            checked={props.completed}
            onChange={[props.toggle, props.id]}
          />
          {props.text}
        </span>
      </p>
    </div>
  );
}
