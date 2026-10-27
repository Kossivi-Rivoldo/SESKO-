// Developed with ❤️ by KOSSIVI
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Arrow from "./Arrow.jsx";

function Brand({ footer = false }) {
  return (
    <Link
      className={`brand${footer ? " footer-brand" : ""}`}
      to="/"
      aria-label="Sesko Arts, accueil"
    >
      <img className="brand-logo" src="/images/SES40.jpg" alt="" />
    </Link>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Brand />
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i aria-hidden="true" className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} />
      </button>
      <nav
        className={menuOpen ? "main-nav is-open" : "main-nav"}
        aria-label="Navigation principale"
      >
        <NavLink to="/" end onClick={closeMenu}>Accueil</NavLink>
        <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
        <NavLink to="/prestations" onClick={closeMenu}>Prestations</NavLink>
        <NavLink to="/apropos" onClick={closeMenu}>À propos</NavLink>
        <NavLink to="/avis" onClick={closeMenu}>Avis clients</NavLink>
        <NavLink className="nav-contact" to="/contact" onClick={closeMenu}>
          Réservation <Arrow diagonal />
        </NavLink>
      </nav>
    </header>
  );
}

export { Brand };
export default Header;


