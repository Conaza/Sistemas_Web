import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/register", { username, password });
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (err: any) {
      alert(err?.response?.data?.error || "Erro ao cadastrar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="route-content">
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container p-4 border rounded bg-light" style={{ maxWidth: "1000px" }}>
        <h2 className="mb-4 text-center">Cadastro</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Usuário</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-dark w-100" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        <p className="mt-3 text-center">
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Register;
