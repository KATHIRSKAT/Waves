import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import LogoImage from "../../Logo/SEEE.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a NavLink is clicked
  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="Header-Container">
      <div className="Logo">
        <div className="Seee-logo">
          <img className="seee-img" src={LogoImage} alt="SEEE Logo" />
        </div>
        <div className="Seee-Name">
          <p className="seee-text">SEEE</p>
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Dropdown Menu */}
      <div className={`page-links ${isMenuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className="Header-Element"
          onClick={handleNavLinkClick}
          activeClassName="active" // Add active class for styling (optional)
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="Header-Element"
          onClick={handleNavLinkClick}
          activeClassName="active"
        >
          About Us
        </NavLink>
        <NavLink
          to="/hackathon"
          className="Header-Element"
          onClick={handleNavLinkClick}
          activeClassName="active"
        >
          Hackathon
        </NavLink>
        <NavLink
          to="/workshop"
          className="Header-Element"
          onClick={handleNavLinkClick}
          activeClassName="active"
        >
          Workshop
        </NavLink>
        
      </div>
    </div>
  );
}

export default Header;