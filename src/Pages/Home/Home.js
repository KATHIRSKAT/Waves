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
                        Waves '25 is an esteemed inter-college symposium organized by the Society of Electrical and Electronics Engineers (SEEE), took place on March 20, 21, and 22. Last year marked the 42nd edition of this prestigious event. The previous iteration of Waves featured an impressive lineup, including seven workshops, technical events, non-technical events, all designed to enrich the educational experience of partici-pants.

The workshops were specifically tailored to help students bridge the gap between theoretical knowledge and real-world applications, pro-viding invaluable insights into practical scenarios. These sessions aimed to equip students with new skills beneficial for their future ca-reers. The technical events challenged participants to demonstrate their expertise and domain knowledge through engaging quizzes and competitions, fostering a spirit of innovation and collaboration
                        </p>
                        <p>
                        Meanwhile, the non-technical events ensured that participants experi-enced an exhilarating atmosphere, blending learning with enjoyment and camaraderie. The last edition of Waves successfully attracted over 250 participants from various colleges across India, solidifying its reputation as a premier platform for knowledge exchange and skill development.
                        </p>
                        <p>
                        As we look forward to this year's symposium, we invite students and professionals alike to join us for an enriching experience that promis-es to inspire, educate, and entertain. Waves '25 aims to continue this legacy of excellence, fostering a vibrant community of learners and innovators in the field of electrical and electronics engineering. Join us as we embark on this exciting journey of discovery and growth!
                        </p>
                    </div>

                    {/* Accommodation Section */}
                    <div className="section accommodation">
                        <h2>Accommodation</h2>
                        <p>
                            We have partnered with college hostels near the venue to provide discounted rates for symposium attendees. Please fill out the form below to register for accommodation.
                        </p>
                        <ul>
                            <li>
                                <a href="https://forms.gle/EqF8niZTUMnDbB8d6" target="_blank" rel="noopener noreferrer">
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