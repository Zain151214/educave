import React from 'react';
import './Programs.css';
import { Link } from 'react-router-dom';
import Undergratuate from './Undergratuate/Undergratuate.js';


const Programs = () => {
    return (
        <>
            <div className="programs-hero-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/Home/background-image.png'})` }}>
                <div className="programs-content">
                    <span className='hero-section-heading futura'>
                        Revolutionizing <br />
                        <span className='light-blue'> Education Counselling </span> <br />
                        In Pakistan
                    </span>
                    <p className='f-16-popins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui quis cupiditate impedit veritatis asperiores est incidunt ipsa dignissimos officia?</p>
                </div>
                <div className="programs-image">
                    <img src="Images/dummy.png" alt="" />    
                </div>

            </div>
            <div className="programs-section">
                <h1 className='futura'>Choose Your Preferred Program</h1>
                <p className='f-16-popins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, laboriosam deserunt enim ducimus facere debitis sequi consequatur quasi aliquam illum.</p>

                <div className="programs-section-cards-container">

                    <Link to='/undergratuate-programs' className="programs-section-card">
                        <div className="programs-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="programs-section-card-heading futura">
                            <span>Undergratuate Programs</span>
                        </div>
                    </Link>


                    <div className="programs-section-card">
                        <div className="programs-section-card-logo">
                            <img className='master' src="Images/Home/icon-9.png" alt="" />
                        </div>
                        <div className="programs-section-card-heading futura">
                            <span>Master's / M Phil Program</span>
                        </div>
                    </div>

                    <div className="programs-section-card">
                        <div className="programs-section-card-logo">
                            <img className='medical' src="Images/Home/icon-10.png" alt="" />
                        </div>
                        <div className="programs-section-card-heading futura">
                            <span>Medical Science Program</span>
                        </div>
                    </div>

                    <div className="programs-section-card">
                        <div className="programs-section-card-logo">
                            <img className='phd' src="Images/Home/icon-11.png" alt="" />
                        </div>
                        <div className="programs-section-card-heading futura">
                            <span>Ph.D <br /> Program</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Undergratuate /> */}

        </>
    )
}

export default Programs;