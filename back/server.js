const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// memória temporária (não usei banco de dados pois preferi a metodologia CRUD que foi ensinada)
let usuarios = [{ username: "admin", password: "0000", role: "admin" }];
let pedidos = [];


app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  // impedir duplicados
  const existe = usuarios.find((u) => u.username === username);
  if (existe) {
    return res.status(400).json({ message: "Usuário já existe" });
  }

  // admin não é registrado manualmente
  if (username === "admin") {
    return res.status(400).json({ message: "Esse usuário é reservado" });
  }

  usuarios.push({ username, password, role: "user" });
  res.json({ message: "Cadastro realizado com sucesso!" });
});

// Login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // admin fixo (não funcional)
  if (username === "admin" && password === "0000") {
    return res.json({ message: "Bem-vindo, Admin!", role: "admin" });
  }

  const user = usuarios.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(400).json({ message: "Credenciais inválidas" });
  }

  return res.json({ message: "Login bem-sucedido!", role: "user" });
});


// Criar pedido
app.post("/api/pedidos", (req, res) => {
  const { cliente, endereco, itens, valor } = req.body;

  if (!cliente || !endereco || !itens || itens.length === 0) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

 const novoPedido = {
  id: pedidos.length + 1,
  cliente,
  endereco,
  itens,
  valor,
  createdAt: new Date().toISOString(),
};

  pedidos.push(novoPedido);
  res.json({ message: "Pedido registrado com sucesso!", pedido: novoPedido });
});

// Listar pedidos
app.get("/api/pedidos", (req, res) => {
  res.json(pedidos);
});


app.listen(5000, () => console.log("Servidor rodando na porta 5000"));

