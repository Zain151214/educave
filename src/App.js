import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Programs from './Components/Programs/Programs';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import PageNotFound from './Components/PageNotFound';
import LogIn from './Components/Home/Account Details/LogIn';
import SignUp from './Components/Home/Account Details/SignUp';
import Footer from './Components/Footer/Footer';
import MessageButton from './Components/MessageButton/MessageButton';
import BackToTop from './Components/BackToTop/BackToTop';
import Undergratuate from './Components/Programs/Undergratuate/Undergratuate';
import ManagementSciences from './Components/Programs/Undergratuate/ManagementSciences';
import City from './Components/Programs/Undergratuate/City';
import SocialSciences from './Components/Programs/Undergratuate/SocialSciences';
import Engineering from './Components/Programs/Undergratuate/Engineering';
import Computer from './Components/Programs/Undergratuate/Computer';
import Media from './Components/Programs/Undergratuate/Media';




function App() {
  return (
    <div className="App">
      <Navbar />
      <BackToTop />
      <MessageButton />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/undergratuate-programs" element={<Undergratuate />} />
        <Route path='/managementSciences' element={<ManagementSciences />} />
        <Route path='/socialSciences' element={<SocialSciences />} />
        <Route path='/engineering' element={<Engineering />} />
        <Route path='/computer' element={<Computer />} />
        <Route path='/media' element={<Media />} />
        <Route path='/city' element={<City />} />
        <Route path='/about' element={<About />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
