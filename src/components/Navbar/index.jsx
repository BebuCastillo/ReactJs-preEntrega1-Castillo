import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="container">
        <p onClick={() => alert("Próximamente") }>Inicio</p>
        <p>Quienes Somos</p>
        <p>Productos</p>
    </nav>
  );
};

export default Navbar;