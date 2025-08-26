import { useState } from "react";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Mensagem enviada por ${nome} (${email}): ${mensagem}`);
    setNome(""); setEmail(""); setMensagem("");
  }

  return (
     <div className="route-content">
    <div className="container my-5">
      <h2 className="mb-4">Contato</h2>
      <div className="card p-4 shadow-sm">
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" placeholder="Seu nome" value={nome} onChange={e => setNome(e.target.value)} />
          <input className="form-control mb-3" placeholder="Seu email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <textarea className="form-control mb-3" placeholder="Sua mensagem" rows={4} value={mensagem} onChange={e => setMensagem(e.target.value)} />
          <button className="btn btn-dark w-100" type="submit">Enviar</button>
        </form>
      </div>
    </div>
    </div>
  );
}
