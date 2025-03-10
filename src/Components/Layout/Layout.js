import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackGroundVideo from "./BackGroundVideo.mp4"; // Import the video
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={BackGroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Header, Content, and Footer */}
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;