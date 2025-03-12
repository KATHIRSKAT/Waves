import React from "react";
import ProjectLogo from "../../Logo/OB/Project.png"; // Update the logo path as needed
import "./Project.css"; // Import the CSS file
import Layout from "../../Components/Layout/Layout";

const Project = () => {
  return (
    <Layout>
      <div className="project-container">
        <div className="project-card">
          <img src={ProjectLogo} alt="Project Logo" className="project-image" />
          <div className="project-details">
          <div className="card-footer">
            <p>
            The *Society of Electrical and Electronics Engineers (SEEE)* presents the *Project Display* at *WAVES, a platform for students to showcase their innovative projects and technical expertise. This event highlights groundbreaking ideas in **electrical, electronics, and interdisciplinary engineering*, offering participants an opportunity to present their work to peers, industry experts, and academia. Join us to witness creativity in action and explore the future of technology!
            </p>
        <a href="https://forms.gle/x8BqtsG8ZWMP8NLP6" target="_blank" rel="noopener noreferrer" className="register-button">
          Register
        </a>
      </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;