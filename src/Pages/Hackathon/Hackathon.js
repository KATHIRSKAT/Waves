import React from "react";
import Logo from "../../Logo/OB/Hack.png";
import "./Hackathon.css"; // Create this CSS file for custom styles
import Layout from "../../Components/Layout/Layout";

const Hackathon = () => {
  return (
    <Layout>
      <div className="hackathon-container">
        <div className="hackathon-card">
          <img src={Logo} alt="Hackathon Logo" className="hackathon-image" />
          <div className="hackathon-details">
            <h2 className="hackathon-title">Hackathon 2025</h2>
            <p className="hackathon-description">
              Join our 24-hour hackathon to solve real-world problems using cutting-edge technology. Whether you're a beginner or an expert, this is your chance to collaborate, innovate, and win exciting prizes!
            </p>
            <a
              href="https://forms.gle/pXqBQpk5R4QmXLfJ7"
              target="_blank"
              rel="noopener noreferrer"
              className="hackathon-registration-link"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hackathon;