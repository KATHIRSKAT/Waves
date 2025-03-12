import React from 'react';
import './Home.css';
import Logo from '../../Logo/OB/W25.png'
import Layout from '../../Components/Layout/Layout';

function Home() {
    return (
        <>
            <Layout>
                <div className="container">
                    {/* Symposium Logo Section */}
                    <div className="section symposium-logo">
                        <img src={Logo} alt="Symposium Logo" className="logo" />
                        <h1 className="title">WAVES'25</h1>
                        <p className="date">March 20,21,22</p>
                    </div>

                    {/* About Symposium Section */}
                    <div className="section-about-symposium">
                        <h2>About the Symposium</h2>
                        <p>
                        Waves '25, organized by the Society of Electrical and Electronics Engineers (SEEE), will take place on March 20-22. This prestigious inter-college symposium features workshops, technical events, and non-technical events, fostering innovation and learning. Last year's edition attracted 250+ participants from across India, bridging the gap between theory and real-world applications. Join us for an exciting journey of discovery, skill-building, and collaboration at Waves '25!
                        </p>
                
                    </div>

                    {/* Accommodation Section */}
                    <div className="section accommodation">
                        <h2>Accommodation</h2>
                        <p>
                            We have partnered with college hostels near the venue to provide discounted rates for symposium attendees. Please fill out the form below to register for accommodation.
                        </p>
                        <ul>
                            <li className='accButton'>
                                <a href="https://forms.gle/EqF8niZTUMnDbB8d6" target="_blank" rel="noopener noreferrer" className='accLink'>
                                    Register
                                </a>
                            </li>
                        </ul>
                    </div>

                   

                    {/* Sponsors Section */}
                    
                </div>
            </Layout>
        </>
    );
}

export default Home;