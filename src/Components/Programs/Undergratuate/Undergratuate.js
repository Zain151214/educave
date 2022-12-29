import React from 'react';
import "./Undergratuate.css";
import { Link, Outlet } from 'react-router-dom';



const Undergratuate = () => {
    return (
        <>
            <div className="undergratuate-section">
                <h1>Undergratuate Programs</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore libero, sequi quisquam ad ullam nobis reprehenderit
                    molestias animi. Eos, in.
                </p>
                <div className="undergratuate-card-container">

                    <Link to='/managementSciences' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Management & Sciences</span>
                        </div>
                    </Link>

                    <Link to='/socialSciences' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Social Sciences</span>
                        </div>
                    </Link>

                    <Link to='/engineering' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Enginerring</span>
                        </div>
                    </Link>

                    <Link to='/computer' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Computer IT</span>
                        </div>
                    </Link>

                    <Link to='/media' className="undergratute-card start">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Media & Arts</span>
                        </div>
                    </Link>


                </div>
            </div>

            <Outlet />
        </>
    )
}

export default Undergratuate