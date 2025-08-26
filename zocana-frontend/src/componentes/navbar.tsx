import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";


  // Barra de navegação e LogoMarca na pagina home
  return (
    <>
      {isHome && (
        <div className="text-center py-4 bg-transparent">
          <img src="/images/logo.png" alt="Zocana" className="logo-home" />
        </div>
      )}
      <div className="nav-band d-flex justify-content-between align-items-center">
        <div>
          <Link to="/" className="btn btn-light me-2">Home</Link>
          <Link to="/about" className="btn btn-light me-2">Sobre</Link>
          <Link to="/contact" className="btn btn-light">Contato</Link>
        </div>

        <div>
          <Link to="/login" className="btn btn-light me-2">Login</Link>
          <Link to="/checkout" className="btn btn-light me-2">Carrinho</Link>
          <Link to="/profile" className="btn btn-light">Perfil</Link>
        </div>
      </div>
    </>
  );
}
