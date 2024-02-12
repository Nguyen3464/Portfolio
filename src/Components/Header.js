import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../Assets/logo.jpeg";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <Link to="/" className="title">
        <img src={logo} alt="" className="logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about" onClick={handleNavLinkClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={handleNavLinkClick}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={handleNavLinkClick}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleNavLinkClick}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
