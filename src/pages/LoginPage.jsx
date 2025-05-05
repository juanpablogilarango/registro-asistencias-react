import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validación básica
    if (username.trim() === "" || password.trim() === "") {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Simulamos credenciales válidas (puedes cambiarlas luego)
    if (username === "admin" && password === "1234") {
      localStorage.setItem("token", "token-falso");
      localStorage.setItem("username", username);
      navigate("/admin");
    } else {
      alert("Credenciales incorrectas.");
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Usuario:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </label>
        </div>
        <div>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </label>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
