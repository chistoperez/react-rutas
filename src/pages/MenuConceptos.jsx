import { NavLink, Link } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>enlaces html (no recomendado): </span>
          <a href="/">Home</a>
          <a href="/About">Acerca</a>
          <a href="/Contact">Contacto</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/no-existe">Contact</Link>
        </li>

        <li>
          <span>Componente NavLink: </span>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/About" activeclassname="active">
            About
          </NavLink>
          <NavLink to="/Contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
        <li>
          <span>Parámetros: </span>
          <Link to="/usuario/jonmircha">jonmircha</Link>
          <Link to="/usuario/kenai">kenai</Link>
        </li>
        <li>
          <span>Parámetros de consulta: </span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones:</span>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">contacto</Link>
        </li>
        <li>
          <span>Rutas Anidadas:</span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas Privadas:</span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
