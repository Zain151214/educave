import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css';


const Home = () => {

    const programs = [{ name: "Bachelors" }, { name: "Masters" }, { name: "Ph.D" }];

    const [programItems, setProgramItems] = useState(programs[0]); // <-- seed initial state

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timerId = setInterval(
            () => setIndex((i) => (i + 1) % programs.length), // <-- increment index
            3000
        );

        return () => clearInterval(timerId);
    }, []);

    useEffect(() => {
        setProgramItems(programs[index]); // <-- update programs items when index updates
    }, [index]);



    return (
        <>

            <div className="hero-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/Home/background-image.png'})` }}>
                <div className="content">
                    <h1 className='front-heading futura'>Cleverly Plan Your</h1>
                    <h1 className='front-animation futura'>
                        {programItems.name}
                    </h1>
                    <p className='front-text f-16-popins'>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sed, necessitatibus.
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sed, necessitatibus.
                    </p>
                    <button className='front-button-1 futura'>Register</button>
                    <button className='front-button-2 futura'>Register</button>
                    <p className='front-sub-heading f-16-popins'>Start your 14 - day trail</p>
                </div>
                <div className="front-img">
                    <img src="Images/Home/asdf.png" alt="" />
                </div>
            </div>

            <div className="section-seprator-line"></div>

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

            <div className="section-2">
                <img src="Images/Home/section-2.png" className='img' alt="" />
                <div className="content futura">
                    <h1>Educate couselling for your better future</h1>
                    <p className='f-16-popins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, corrupti?</p>

                    <div className="content-details">

                        <div className="content-details-text">
                            <img src="Images/Home/icon-1.png" alt="" />
                            <span className='f-16-popins'>Lorem ipsum dolor sit amet, consectetur adcing elit. Molestias, atque.</span>
                        </div>

                        <div className="content-details-text">
                            <img src="Images/Home/icon-1.png" alt="" />
                            <span className='f-16-popins'>Lorem ipsum dolor sit amet, consectetur icing elit. Molestias, atque.</span>
                        </div>

                        <div className="content-details-text">
                            <img src="Images/Home/icon-1.png" alt="" />
                            <span className='f-16-popins'>Lorem ipsum dolor sit amet, consectetur icing elit. Molestias, atque.</span>
                        </div>

                        <div className="content-details-text">
                            <img src="Images/Home/icon-1.png" alt="" />
                            <span className='f-16-popins'>Lorem ipsum dolor sit amet, consectetur acing elit. Molestias, atque.</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="about-section">
                <h1 className='futura'>About Us</h1>
                <p className='f-16-popins about-sub-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, facere. adipisicing elit. Molestiae,</p>

                <div className="about-section-cards-container">

                    <div className="card">
                        <div className="showHover"></div>
                        <img src="Images/Home/icon-2.png" alt="" />
                        <span className='card-heading futura'>Sub Heading</span>
                        <br />
                        <p className='card-text f-16-popins'>Lo sadasd onsectetur adipisicing elit. Laboriosam  consectetur adipisicing elitsicing elit. Laboriosam  consectetur adipisicing elit    </p>
                    </div>

                    <div className="card">
                        <div className="showHover"></div>
                        <img src="Images/Home/icon-3.png" alt="" />
                        <span className='card-heading futura'>Sub Heading</span>
                        <br />
                        <p className='card-text f-16-popins'>Lo sadsad consectetur adipisicing elitm  consectetur adipisicing elitsicing elit. Laboriosam  consectetur adipisicing elit    </p>
                    </div>

                    <div className="card">
                        <div className="showHover"></div>
                        <img src="Images/Home/icon-4.png" alt="" />
                        <span className='card-heading futura'>Sub Heading</span>
                        <br />
                        <p className='card-text f-16-popins'>Lo  ag elit. Laboriosam sicing elit. Laboriosam  consectetur adipisicing elitsicing elit. Laboriosam  consectetur adipisicing elit    </p>
                    </div>

                </div>

                <div className="about-section-animation">
                    <div className="animated-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/Home/about-section-img.png'})` }}></div>

                    <div className="animated-card-container">

                        <div className="animated-card border-left">
                            <img src="Images/Home/icon-2.png" alt="" />
                            <span className='animated-card-heading futura'>Sub Heading</span>
                            <br />
                            <p className='animated-card-text f-16-popins'>Lo consectetur adipisicing elit. Laboriosam  consectetur adipisicing elit. Laboriosam sicing elit. Laboriosam  consectetur adipisicing elitsicing elit. Laboriosam  consectetur adipisicing elit    </p>
                        </div>

                        <div className="animated-card">
                            <img src="Images/Home/icon-3.png" alt="" />
                            <span className='animated-card-heading futura'>Sub Heading</span>
                            <br />
                            <p className='animated-card-text f-16-popins'>Lo consectetur adipisicing elit. Laboriosam  consectetur adipisicing elit. Laboriosam sicing elit. Laboriosam  consectetur adipisicing elitsicing elit. Laboriosam  consectetur adipisicing elit    </p>
                        </div>

                        <div className="animated-card">
                            <img src="Images/Home/icon-4.png" alt="" />
                            <span className='animated-card-heading futura'>Sub Heading</span>
                            <br />
                            <p className='animated-card-text f-16-popins'>Lo consectetur adipisicing elit. Laboriosam  consectetur adipisicing elit. Laboriosam sicing elit. Laboriosam  consectetur adipisicing elitsicing elit. Laboriosam  consectetur adipisicing elit    </p>
                        </div>


                    </div>
                </div>


            </div>

            <div className="section-3">

                <div className="row-1">
                    <div className="row-1-content">
                        <h1 className='futura'>Pay once Enjoy for life</h1>
                        <p className='f-16-popins'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, at! Molestias nulla repudiandae corporis ex ea ipsa! Dolores, eveniet at!</p>
                        <button className='futura'>Learn More</button>
                    </div>
                    <div className="row-1-img">
                        <img src="Images/Home/section-3-1.png" alt="" />
                    </div>
                </div>

                <div className="row-2">
                    <div className="row-2-img">
                        <img src="Images/Home/section-3-2.png" alt="" />
                    </div>
                    <div className="row-2-content">
                        <h1 className='futura'>Not everything is paid ... !</h1>
                        <p className='f-16-popins'>Don’t worry, not everything is paid. You can also use Educave for free as well.</p>
                        <div className="content-details">

                            <div className="content-details-text">
                                <img className='section-3-icons' src="Images/Home/icon-5.png" alt="" />
                                <span className='f-16-popins'>Create customized profile.</span>
                            </div>

                            <div className="content-details-text">
                                <img className='section-3-icons' src="Images/Home/icon-6.png" alt="" />
                                <span className='f-16-popins'>Quisque eget sapien quis felis mollis imperdiet.</span>
                            </div>

                            <div className="content-details-text">
                                <img className='section-3-icons' src="Images/Home/icon-7.png" alt="" />
                                <span className='f-16-popins'>get access to our latest education news and blog.</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="section-4">
                <h1 className='futura'>As featured on</h1>
                <p className='f-16-popins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim quaerat repellat temporibus iusto ducimus, tempore facere architecto sequi nobis neque reiciendis nesciunt? Voluptates quisquam ut unde doloribus quis mollitia?</p>
                <div className="section-4-logos">
                    <div className="section-4-logo-row-1">
                        <img src="Images/Home/logo-1.png" alt="" />
                        <img className='logo-2' src="Images/Home/logo-2.png" alt="" />
                        <img className='logo-3' src="Images/Home/logo-3.png" alt="" />
                        <img className='logo-4' src="Images/Home/logo-4.png" alt="" />
                    </div>

                    <div className="section-4-logo-row-2">
                        <img src="Images/Home/logo-5.png" alt="" />
                        <img className='logo-5' src="Images/Home/logo-6.png" alt="" />
                    </div>

                </div>

            </div>


            <div className="testimonials">
                <h1 className='futura'>Testimonials</h1>
                <p className='f-16-popins'>Lorem ipsum dolos E maiores maiores maiores maiores </p>

                <div className="testimonals-card-container">

                    <div className="testimonial-card">
                        <div className="card-border">
                            <div className="rating">
                                <div><img src="Images/Home/card-icon.png" alt="" /></div>
                                <div><img src="Images/Home/stars.png" alt="" /></div>
                            </div>
                            <div className="content">
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur impedit et ipsa veniam cumque excepturi quis enim officiis voluptate nesciunt!</span>
                            </div>
                        </div>

                        <div className="profile">
                            <div className="user-img"><img src="Images/Home/user-img.png" alt="" /></div>
                            <div className="user-details">
                                <span className='user-name futura'>Lorem Ipsum</span>
                                <br />
                                <span className='user-title f-16-popins'>Lorem ipsum lorem ipsum </span>
                            </div>
                        </div>

                    </div>

                    <div className="testimonial-card">
                        <div className="card-border">
                            <div className="rating">
                                <div><img src="Images/Home/card-icon.png" alt="" /></div>
                                <div><img src="Images/Home/stars.png" alt="" /></div>
                            </div>
                            <div className="content">
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur impedit et ipsa veniam cumque excepturi quis enim officiis voluptate nesciunt!</span>
                            </div>
                        </div>

                        <div className="profile">
                            <div className="user-img"><img src="Images/Home/user-img.png" alt="" /></div>
                            <div className="user-details">
                                <span className='user-name futura'>Lorem Ipsum</span>
                                <br />
                                <span className='user-title f-16-popins'>Lorem ipsum lorem ipsum </span>
                            </div>
                        </div>

                    </div>

                    <div className="testimonial-card">
                        <div className="card-border">
                            <div className="rating">
                                <div><img src="Images/Home/card-icon.png" alt="" /></div>
                                <div><img src="Images/Home/stars.png" alt="" /></div>
                            </div>
                            <div className="content">
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur impedit et ipsa veniam cumque excepturi quis enim officiis voluptate nesciunt!</span>
                            </div>
                        </div>

                        <div className="profile">
                            <div className="user-img"><img src="Images/Home/user-img.png" alt="" /></div>
                            <div className="user-details">
                                <span className='user-name futura'>Lorem Ipsum</span>
                                <br />
                                <span className='user-title f-16-popins'>Lorem ipsum lorem ipsum </span>
                            </div>
                        </div>

                    </div>










                </div>

                <div className="counter">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <Outlet />
        </>
    )


}

export default Home;