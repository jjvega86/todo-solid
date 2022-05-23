import { createSignal, createEffect } from "solid-js";
import { supabase } from "./services/Supabase/supabaseClient";

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
      <h1>Hello, JJ!</h1>
    </main>
  );
}
