import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa"; 

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>© 2025 Waves. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/seee_ceg?igsh=MWhkZ2NxZm51emQ1Yg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://youtube.com/@seeeceg5966?feature=shared" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
        <p>Developed by</p>
            
            <a href="https://www.linkedin.com/in/kathir-s-427b77318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="DevelopersName" target="_blank" rel="noopener noreferrer">Kathir  </a>
            <a href="https://www.linkedin.com/in/kishore-dharun-a87176212?trk=contact-info" className="DevelopersName" target="_blank" rel="noopener noreferrer">Dharun </a>
            <a href="" className="DevelopersName" target="_blank" rel="noopener noreferrer">Divya  </a>
            
      </div>
    </footer>
  );
}

export default Footer;