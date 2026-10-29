import { useState } from "react";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Login } from "./pages/Login.jsx";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return authenticated ? <Dashboard /> : <Login onLogin={() => setAuthenticated(true)} />;
}
