import React, { useState, useEffect } from 'react';

import ScrollToTop from "./components/ScrollToTop";
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Quote from './components/Quote';

const App = () => {
  const [isToTopVisible, setIsToTopVisible] = useState(false);
  const [showNavBtn, setShowNavBtn] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  // number of images to show in Gallery based on breakpoints 650, 839, 1200px
  const [visible, setVisible] = useState(viewportWidth <= 1200 && viewportWidth >= 840 ? 3 : 4);
  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      setIsToTopVisible(true);
    } else {
      setIsToTopVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    if (viewportWidth <= 767) {
      setShowNavBtn(true);
    } else {
      setShowNavBtn(false);
    }

    // CSS breakpoint for Gallery ()
    if (viewportWidth <= 1200 && viewportWidth >= 840) {
      // only show 3 and only load 3 if 840 <= viewportWidth <= 1200
      setVisible(3);
    } else if (viewportWidth >= 1201 || viewportWidth <= 839) {
      setVisible(4);
    }

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [viewportWidth]);


  return (
    <div className='main-container'>
      {isToTopVisible && (<ScrollToTop />)}
      <Header 
      showNavBtn={showNavBtn} 
      // setShowNavBtn={setShowNavBtn} 
      viewportWidth={viewportWidth}
      />
      <div className="content-wrap">
        {/* Main content goes here */}
        <Welcome />
        <About />
        <Services />
        <Gallery 
        viewportWidth={viewportWidth}
        visible={visible}
        setVisible={setVisible}
        setIsToTopVisible={setIsToTopVisible}
         />
        <Testimonials />
        <Quote />
      </div>
      <Footer />
    </div>
  );
}

export default App;
