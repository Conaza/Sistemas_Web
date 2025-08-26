import { useEffect, useState } from "react";
import api from "../services/api";

type Pedido = {
  cliente: string;
  endereco: string;
  itens: string[];
  valor: number;
  createdAt: string;
};

export default function Admin() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<Pedido[]>("/api/pedidos")
      .then(r => setPedidos(r.data))
      .catch(() => alert("Erro ao carregar pedidos"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container my-5">Carregando pedidos...</div>;

  return (
         <div className="route-content">
    <div className="container my-5">
      <h2 className="mb-4">Admin — Pedidos</h2>
      {pedidos.length === 0 ? (
        <div className="alert alert-info">Nenhum pedido registrado ainda.</div>
      ) : (
        pedidos.map((p, idx) => (
          <div key={idx} className="card p-3 mb-3 shadow-sm">
            <div className="row">
              <div className="col-md-3"><b>Cliente:</b> {p.cliente}</div>
              <div className="col-md-3"><b>Itens:</b> {p.itens.length}</div>
              <div className="col-md-3"><b>Valor:</b> R$ {p.valor.toFixed(2)}</div>
              <div className="col-md-3"><b>Data:</b> {new Date(p.createdAt).toLocaleString()}</div>
            </div>
            <hr/>
            <div><b>Produtos:</b> {p.itens.join(", ")}</div>
            <div><b>Endereço:</b> {p.endereco}</div>
          </div>
        ))
      )}
    </div>
    </div>
  );
}
