import { createSignal, createEffect } from "solid-js";
import { supabase } from "./services/Supabase/supabaseClient";
import { Routes, Route } from "solid-app-router";

import AuthPage from "./pages/AuthPage/AuthPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import HomePage from "./pages/HomePage/HomePage";
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
      <NavBar session={session()} />
      <Routes>
        <Route
          path="/"
          element={session() ? <HomePage session={session()} /> : <AuthPage />}
        />
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/account"
          element={
            session() ? (
              <AccountPage key={session().user.id} session={session()} />
            ) : (
              <AuthPage />
            )
          }
        />
      </Routes>
    </>
  );
}
