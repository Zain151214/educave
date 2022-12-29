import React from 'react';
import { Link } from 'react-router-dom';

const Computer = () => {
  return (
    <>
            <div className="undergratuate-section">
                <h1>Bachlors of Computer & IT</h1>
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
                            <span>Artificial <br /> Intelligence</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Bioinformatics</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Computer Science</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Cyber Security</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Data Science</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Inter of Things <br /> (IOT)</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Robotics</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
  )
}

export default Computer