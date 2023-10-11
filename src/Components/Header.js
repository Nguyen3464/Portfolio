import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from '../Assets/logo.jpeg'


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <Link to="/" className="title">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};