export default function Home(props) {
  return <div class="container">Hello {props.session.user.email}!</div>;
}
