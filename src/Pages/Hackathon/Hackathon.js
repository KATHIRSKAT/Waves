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
            <div>
              <p>
              The Sustainability Hackathon at WAVES, organized by SEEE, challenges innovators to develop smart, sustainable solutions for real-world environmental issues. Participants will collaborate on ideas ranging from renewable energy to eco-friendly innovations. Join us in driving sustainability forward and shaping a greener future!
              </p>
            </div>
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