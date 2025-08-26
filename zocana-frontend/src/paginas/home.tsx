export default function Home() {
  return (
    <div className="route-content">
    <div className="container my-5">
      <h2 className="mb-4">Disponíveis</h2>
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card p-3">Camiseta Essential Zocana</div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">Calça Cargo Urban</div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">Boné Minimal Preto</div>
        </div>
      </div>

      <h2 className="mt-5 mb-4">Em breve</h2>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card p-3 bg-light">Jaqueta Zocana -10%</div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 bg-light">Mochila Zocana -20%</div>
        </div>
      </div>
    </div>
    </div>
  );
}
