import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-container">

                <div className="footer-content">

                    <div className="footer-logo">
                        <img src="Images/Footer/footer-logo.png" alt="" />
                    </div>

                    <div className="footer-company">
                        <h1>Company</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Principles</li>
                            <li>Carriers</li>
                        </ul>
                    </div>

                    <div className="footer-community">
                        <h1>Community</h1>
                        <ul>
                            <li>Blog</li>
                            <li>Events</li>
                            <li>Press Release</li>
                        </ul>
                    </div>

                    <div className="footer-policy">
                        <h1>Policy</h1>
                        <ul>
                            <li>Terms of use</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Setting</li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h1>Contact Us</h1>

                        <div className="container">

                            <div>
                                <img src="Images/Footer/contact-logo-1.png" alt="" />
                                <p>info@solverscave.com</p>
                            </div>

                            <div>
                                <img src="Images/Footer/contact-logo-2.png" alt="" />
                                <p>+92 375 728 5462</p>
                            </div>

                            <div>
                                <img src="Images/Footer/contact-logo-3.png" alt="" />
                                <p>Office S-13, 2nd floor, E-8 plaza,
                                    Saidpur Road, Rawalpindi</p>
                            </div>

                            <div className='social-media-container'>
                                <img src="Images/Footer/social-media-1.png" alt="" />
                                <img src="Images/Footer/social-media-2.png" alt="" />
                                <img src="Images/Footer/social-media-3.png" alt="" />
                                <img src="Images/Footer/social-media-4.png" alt="" />
                            </div>

                        </div>
                    </div>

                </div>

                <hr />

                <div className="copy-right">
                    <p>Copyright © 2022 Educave., All Rights Reserved</p>
                </div>

            </div>

        </>
    )
}

export default Footer;