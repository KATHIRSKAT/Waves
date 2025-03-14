import React from 'react';
import './Accomadation.css';
import Layout from '../../Components/Layout/Layout';
function Accommodation() {
    return (
        <>
            <Layout>
                <div className="container">
                    

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
                    
                </div>
            </Layout>
        </>
    );
}

export default Accommodation;