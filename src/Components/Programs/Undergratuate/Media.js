import React from 'react';
import { Link } from 'react-router-dom';

const Media = () => {
  return (
    <>
            <div className="undergratuate-section">
                <h1>Bachlors of Science in Media & Arts</h1>
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
                            <span>Architectural Engineering</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Bachelors of Design</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Computer Arts</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Fine Arts</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Interior Design</span>
                        </div>
                    </Link>

                    <Link to='/city' className="undergratute-card">
                        <div className="undergratuate-section-card-logo">
                            <img className='undergratuate' src="Images/Home/icon-8.png" alt="" />
                        </div>
                        <div className="undergratuate-section-card-heading futura">
                            <span>Tourism  & <br /> Hospitility</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
  )
}

export default Media;