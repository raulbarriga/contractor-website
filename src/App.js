import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Quote from './components/Quote';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <div className="content-wrap">
        {/* Main content goes here */}
        <Welcome />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Quote />
      </div>
      <Footer />
    </div>
  );
}

export default App;
