import { createSignal, createEffect } from "solid-js";
import { supabase } from "./services/Supabase/supabaseClient";
import { Routes, Route } from "solid-app-router";

import Auth from "./components/Auth/Auth";
import Account from "./components/Account/Account";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  const [session, setSession] = createSignal(null);

  createEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={session() ? <Home session={session()} /> : <Auth />}
        />
        <Route path="/login" element={<Auth />} />
        <Route
          path="/account"
          element={<Account key={session().user.id} session={session()} />}
        />
      </Routes>
    </>
  );
}
