import React from 'react';
import { Link } from 'react-router-dom';

const ManagementSciences = () => {
    return (
        <>
            <div className="undergratuate-section">
                <h1>Bachlors of Management Sciences</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore libero, sequi quisquam ad ullam nobis reprehenderit
                    molestias animi. Eos, in.
                </p>
                <div className="undergratuate-card-container">

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Business Administration</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Accounting & <br /> Finance</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Science & <br /> Economics</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Business Analytics</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ManagementSciences