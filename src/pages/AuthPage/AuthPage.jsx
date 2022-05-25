import { createSignal } from "solid-js";
import { supabase } from "../../services/Supabase/supabaseClient";

export default function AuthPage() {
  const [loading, setLoading] = createSignal(false);
  const [email, setEmail] = createSignal("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email: email() });
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="container">
      <div aria-live="polite">
        <h1>Supabase + SolidJS</h1>
        <p>Sign in via magic link with your email below</p>
        {loading() ? (
          "Sending magic link..."
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email()}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button aria-live="polite">Send magic link</button>
          </form>
        )}
      </div>
    </div>
  );
}
