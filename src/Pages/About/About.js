import React from "react";
import "./About.css";  // Importing the CSS file for styling
import Logo from "../../Logo/SEEE.png"; // Replace with the actual path to your image
import Layout from "../../Components/Layout/Layout";
import Akka from "../../Logo/OB/Akka.jpg"
import bala from "../../Logo/OB/bala.jpg"
import Deenu from "../../Logo/OB/Deenu.jpg"
import Dinesh from "../../Logo/OB/Dinesh.jpg"
import Gokul from "../../Logo/OB/Gokul.jpg"
import Krithiga from "../../Logo/OB/Krithiga.jpg"
import Naveena from "../../Logo/OB/Naveena.jpg"
import nivasini from "../../Logo/OB/nivasini.jpg"
import Pratheesh from "../../Logo/OB/Pratheesh.jpg"
import prem from "../../Logo/OB/prem.jpg"


const About = () => {
  return (
    <Layout>
      <div className="about-us-container">
        {/* Department Logo Section */}
        <div className="logo-container">
          <img
            src={Logo} // Replace with your actual logo path
            alt="Department Logo"
            className="department-logo"
          />
        </div>

        {/* About the Department Section */}
        <div className="department-info">
          <h2>About Our Department</h2>
          <p>
          The Department of Electrical and Electronics Engineering was established in 1932, and has been exceptionally consistent in producing talented and ambitious graduates who go on to bring laurels to their alma mater - some notable names include Dhiraj Rajaram and Madhusudhan Ravindran.

Spread over three centres on campus, namely the Electrical Laboratory, the High Voltage Engineering Laboratory and the Power Systems block, the depart-ment offers specialisations and research opportunities under the following core areas Power Engineering and Management, Embedded System Technologies, Power Systems Engineering, High Voltage Engineering, Power Electronics and Drives and Control & Instrumentation.
          </p>
          <h2>About HOBBEEE CLUB</h2>
          <p>
          The HOBBEEE Club of the Electrical and Electronics Engineering Department at College of Engineering Guindy, is a dynamic community of electrical engineering students dedicated to knowledge sharing, academic excellence and innovative thinking.

HOBBEEE was founded with the mission to foster a deeper understanding of theoretical concepts by bridging the gap between seniors and juniors. This club creates an interactive and supportive environment, where seniors mentor juniors, by helping them to grasp fundamental electrical concepts, clarify doubts and delve into the theoretical aspects in-depth.

          </p>
          <h2>ABOUT IMPULSE</h2>
          <p>
          Ever wondered what happens when you combine the intellectual
minds of Electrical Engineering, along with the creative zest of
journalism? The result is “IMPULSE”- where innovations are sparked,
and ideas are powered.
</p>
          <p>
          “IMPULSE” is the electrifying official magazine of SEEE, which
was first published in the year 2010. From cutting edge tech articles,
to inspiring interviews, IMPULSE is one of  the best platforms for exploring the
recent trends and breakthroughs in the world of Electrical and
Electronics Engineering, and getting your minds electrified.


          </p>

          <p>
          The domains in IMPULSE include Design, Contents, Editing,
Podcast, and Interview. Each domain displays the creative minds of
the IMPULSE team. For students, this is a wonderful platform to
showcase their talents and skills beyond academics.

          </p>
        </div>

        {/* Department Office Barriers Section */}
        <div className="office-barriers">
          <h3>Department Office Barriers</h3>
          <div className="barriers-image-container">
            {/* Duplicate the images for seamless looping */}
            <div className="barriers-image-wrapper">
              <div className="Barrier">
                  <img
                    src={prem} // Replace with your actual barriers image path
                    alt="Department Office Barriers"
                    className="barriers-image"
                  />
                  <div>
                    <h4>Premnath R</h4>
                    <h4>President</h4>
                  </div>
              </div>
              <div className="Barrier">
                  <img
                    src={Naveena} // Replace with your actual barriers image path
                    alt="Department Office Barriers"
                    className="barriers-image"
                  />
                  <div>
                    <h4>Naveena Sri R</h4>
                    <h4>President</h4>
                  </div>
              </div>
              <div className="Barrier">
                  <img
                    src={Gokul} // Replace with your actual barriers image path
                    alt="Department Office Barriers"
                    className="barriers-image"
                  />
                  <div>
                    <h4>Gokularaj M L</h4>
                    <h4>Vice President</h4>
                  </div>
              </div>
              <div className="Barrier">
                  <img
                    src={Akka} // Replace with your actual barriers image path
                    alt="Department Office Barriers"
                    className="barriers-image"
                  />
                  <div>
                    <h4>Sudhambikai M</h4>
                    <h4>Vice President</h4>
                  </div>
              </div>
              <div className="Barrier">
                  <img
                    src={bala} // Replace with your actual barriers image path
                    alt="Department Office Barriers"
                    className="barriers-image"
                  />
                  <div>
                    <h4>Balakavin S T</h4>
                    <h4>Student Treasurer</h4>
                  </div>
              </div>
              <div className="Barrier">
                  <img
                    src={Deenu} // Replace with your actual barriers image path
                    alt="Department Office Barriers"
                    className="barriers-image"
                  />
                  <div>
                    <h4>Dheenu S</h4>
                    <h4>Student Treasurer</h4>
                  </div>
              </div>
              <div className="Barrier">
                  <img
                  src={nivasini} // Replace with your actual barriers image path
                    alt="Department Office Barriers"
                    className="barriers-image"
                  />
                  <div>
                    <h4>Nivaasini S</h4>
                    <h4>General Secretary</h4>
                  </div>
              </div>
              
              <div className="Barrier">
                  <img
                    src={Dinesh} // Replace with your actual barriers image path
                    alt="Department Office Barriers"
                    className="barriers-image"
                  />
                  <div>
                    <h4>Dinesh</h4>
                    <h4>Joint Secretary</h4>
                  </div>
              </div>
              <div className="Barrier">
                  <img
                    src={Krithiga} // Replace with your actual barriers image path
                    alt="Department Office Barriers"
                    className="barriers-image"
                  />
                  <div>
                    <h4>kiruthiga</h4>
                    <h4>IR</h4>
                  </div>
              </div>
              <div className="Barrier">
                  <img
                    src={Pratheesh} // Replace with your actual barriers image path
                    alt="Department Office Barriers"
                    className="barriers-image"
                  />
                  <div>
                    <h4>Pratheesh</h4>
                    <h4>IR</h4>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;