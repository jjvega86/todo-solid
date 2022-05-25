import TodoList from "../../components/TodoList/TodoList";

//TODO: convert todos to a Store; wire eventHandlers to change completed status

const todos = [
  {
    text: "Do some stuff",
    completed: false,
  },
  {
    text: "Do some more stuff",
    completed: false,
  },
  {
    text: "Rest",
    completed: false,
  },
];

export default function HomePage(props) {
  return (
    <div class="container">
      <h1>Hello {props.session.user.email}!</h1>
      <TodoList todos={todos} />
    </div>
  );
}
