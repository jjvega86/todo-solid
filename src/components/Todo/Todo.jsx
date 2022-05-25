export default function Todo(props) {
  return (
    <div>
      <p>
        <span>
          <input type="checkbox" checked={props.completed} />
        </span>
        {props.text}
      </p>
    </div>
  );
}
