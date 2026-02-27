import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">JayB's Blog</h1>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Main
          </NavLink>
          <NavLink to="/drumtalk" onClick={closeMenu}>
            DrumTalk
          </NavLink>
          <NavLink to="/musictalk" onClick={closeMenu}>
            MusicTalk
          </NavLink>
          <NavLink to="/mybands" onClick={closeMenu}>
            MyBands
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;