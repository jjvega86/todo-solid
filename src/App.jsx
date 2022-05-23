import { createSignal, createEffect } from "solid-js";
import { supabase } from "./services/Supabase/supabaseClient";

import Auth from "./components/Auth/Auth";
import Account from "./components/Account/Account";

export default function App() {
  const [session, setSession] = createSignal(null);

  createEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  createEffect(() => {
    console.log(session());
  });

  return (
    <main class="container">
      {!session() ? (
        <Auth />
      ) : (
        <Account key={session().user.id} session={session()} />
      )}
    </main>
  );
}
