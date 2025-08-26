import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar";
import Home from "./paginas/home";
import Login from "./paginas/login";
import Register from "./paginas/register";
import Profile from "./paginas/Perfil";
import Admin from "./paginas/Admin";
import About from "./paginas/About";
import Contact from "./paginas/Contact";
import Checkout from "./paginas/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
