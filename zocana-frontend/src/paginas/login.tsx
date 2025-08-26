import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
    // login administrador
    if (username === "admin" && password === "0000") {
      localStorage.setItem(
        "zocana_user",
        JSON.stringify({ username: "admin", role: "admin" })
      );

      alert("Login de administrador realizado com sucesso!");
      navigate("/admin");
      return; 
    }

      const res = await api.post("/login", { username, password });

      // salva usuário 
      localStorage.setItem(
        "zocana_user",
        JSON.stringify({ username, role: res.data.role })
      );

      alert(res.data.message);

    
    } catch (err: any) {
      alert(err?.response?.data?.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="route-content">
      <div className="login-box card p-4 shadow-sm bg-white">
        <h3 className="text-center mb-3">Login</h3>
        <form onSubmit={handleLogin}>
          <input
            className="form-control mb-3"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-dark w-100" type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
        <p className="text-center mt-3 mb-0">
          Não tem uma conta?{" "}
          <Link to="/register" className="text-decoration-none">Registre-se!</Link>
        </p>
      </div>
    </div>
  );
}
