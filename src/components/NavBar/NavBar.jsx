import { Link } from "solid-app-router";
import { supabase } from "../../services/Supabase/supabaseClient";

export default function NavBar() {
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
          <button onClick={() => supabase.auth.signOut()}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
