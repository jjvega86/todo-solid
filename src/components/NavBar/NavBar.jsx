import { Link } from "solid-app-router";
import { supabase } from "../../services/Supabase/supabaseClient";
import { Show } from "solid-js";

export default function NavBar(props) {
  return (
    <nav class="container-fluid">
      <ul>
        <li>
          <strong>
            <Link href="/">Solid-Supa-Todo</Link>
          </strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/account">Account</Link>
        </li>
        <li>
          <Show
            when={props.session}
            fallback={<Link href="/login">Log In</Link>}
          >
            <button onClick={() => supabase.auth.signOut()}>Logout</button>
          </Show>
        </li>
      </ul>
    </nav>
  );
}
