export default function Profile() {
  const userRaw = localStorage.getItem("zocana_user");
  const user = userRaw ? JSON.parse(userRaw) : null;

  return (
    <div className="route-content">
    <div className="container my-5">
      <h2 className="mb-4">Meu Perfil</h2>
      <div className="card p-4 shadow-sm">
        {user ? (
          <>
            <p><b>Usuário:</b> {user.username}</p>
            <p><b>Função:</b> {user.role}</p>
            <p className="mb-1"><b>Atualizações de pedidos:</b></p>
            <ul>
              <li>Pedido #1 — Em transporte</li>
              <li>Pedido #2 — Entregue</li>
            </ul>
          </>
        ) : (
          <p>Você não está logado.</p>
        )}
      </div>
    </div>
    </div>
  );
}
