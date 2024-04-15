import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import { Category, Contact, Footer, Hero, Navbar, Payments, Section, Testimonials } from './components';
import { BrowserRouter } from 'react-router-dom';

function App() {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div className='z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
      <Category/>
      <Section/>
      <Payments/>
      <Testimonials/>
      <Contact />
      </div>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
