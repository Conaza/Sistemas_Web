import { useState } from "react";
import api from "../services/api";

export default function Checkout() {
  const [cliente, setCliente] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cart, setCart] = useState<string[]>([]);
  const [valor, setValor] = useState(0);

  const produtos = [
    { nome: "Camiseta Zocana", preco: 59.9 },
    { nome: "Calça Jeans Zocana", preco: 129.9 },
    { nome: "Boné Zocana", preco: 39.9 },
    { nome: "Jaqueta Zocana", preco: 199.9 }
  ];

  function addToCart(p: { nome: string; preco: number }) {
    setCart((prev) => [...prev, p.nome]);
    setValor((prev) => prev + p.preco);
  }

  async function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    if (!cliente || !endereco || cart.length === 0) {
      alert("Preencha nome/endereço e adicione produtos!");
      return;
    }
    try {
      const res = await api.post("/api/pedidos", { cliente, endereco, itens: cart, valor });
      alert(res.data.message);
      setCliente(""); setEndereco(""); setCart([]); setValor(0);
    } catch (err: any) {
      alert(err?.response?.data?.message || "Erro ao finalizar pedido.");
    }
  }

  return (
    <div className="route-content">
      <div className="container my-5">
        <h2 className="mb-4">Finalizar Compra</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Produtos</h4>
            {produtos.map((p, i) => (
              <div key={i} className="card p-3 mb-2 shadow-sm">
                <div className="d-flex justify-content-between align-items-center">
                  <div><b>{p.nome}</b> — R$ {p.preco.toFixed(2)}</div>
                  <button className="btn btn-dark btn-sm" onClick={() => addToCart(p)}>
                    Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>

        
          <div className="col-md-6">
            <h4>Seu Carrinho</h4>
            {cart.length === 0 ? (
              <p>Carrinho vazio</p>
            ) : (
              <ul className="list-group mb-3">
                {cart.map((item, i) => <li key={i} className="list-group-item">{item}</li>)}
              </ul>
            )}
            <p><b>Total:</b> R$ {valor.toFixed(2)}</p>

            <form onSubmit={handleCheckout}>
              <input className="form-control mb-3" placeholder="Seu nome" value={cliente} onChange={e => setCliente(e.target.value)} />
              <input className="form-control mb-3" placeholder="Endereço de entrega" value={endereco} onChange={e => setEndereco(e.target.value)} />
              <button className="btn btn-success w-100" type="submit">Finalizar Pedido</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
