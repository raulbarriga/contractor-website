import React, { useState, useEffect } from "react";
import { useEvent } from "react-use";
import dynamic from "next/dynamic";

import useWindowWidth from "../hooks/useWindowWidth";

const Header = dynamic(() => import("../components/Header.jsx"));
const ScrollToTop = dynamic(() => import("../components/ScrollToTop"));
const Welcome = dynamic(() => import("../components/Welcome.jsx"));
const About = dynamic(() => import("../components/About.jsx"));
const Services = dynamic(() => import("../components/Services.jsx"));
const Gallery = dynamic(() => import("../components/Gallery.jsx"));
const Testimonials = dynamic(() => import("../components/Testimonials.jsx"));
const ContactUs = dynamic(() => import("../components/ContactUs.jsx"));
const Footer = dynamic(() => import("../components/Footer.jsx"));


const App = () => {
  // for the scroll-to-top button visibility
  const [isToTopVisible, setIsToTopVisible] = useState(false);

  // for the hamburger nav menu button
  const [showNavBtn, setShowNavBtn] = useState(false);

  // from the custom hook in the util folder
let viewportWidth = useWindowWidth(); // returns the current viewport width
// console.log(`${viewportWidth}`);

  // number of images to show in Gallery based on breakpoints 650, 839, 1200px
  const [visibleImages, setVisibleImages] = useState(
    `${viewportWidth}` <= 1200 && `${viewportWidth}` >= 840 ? 3 : 4
  );

  // to set the correct # of images per row when resizing the browser
  const [count4TotalImgsPerRow, setCount4TotalImgsPerRow] = useState(4);
  const [count3TotalImgsPerRow, setCount3TotalImgsPerRow] = useState(3);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      setIsToTopVisible(true);
    } else {
      setIsToTopVisible(false);
    }
  };

  // for the scroll-to-top button visibility
  useEvent("scroll", toggleVisibility);

  useEffect(() => {
    // begin to show the hamburger nav menu
    if (`${viewportWidth}` <= 767) {
      setShowNavBtn(true);
    } else {
      // otherwise show regular horizontal nav menu
      setShowNavBtn(false);
    }

    // CSS breakpoint for Gallery ()
    if (`${viewportWidth}` <= 1200 && `${viewportWidth}` >= 840) {
      if (count3TotalImgsPerRow !== visibleImages) {
        setVisibleImages((prevImgValue) => {
          // console.log("prevImgValue: ", prevImgValue);
          let missingImgs = prevImgValue - count3TotalImgsPerRow;
          const answer = visibleImages - missingImgs;
          return answer;
        });
      }
    } else {
      if (count4TotalImgsPerRow !== visibleImages) {
        setVisibleImages((prevImgValue) => {
          // console.log("prevImgValue: ", prevImgValue);
          let missingImgs = count4TotalImgsPerRow - prevImgValue;
          const answer = visibleImages + missingImgs;
          return answer;
        });
      }
    }
  }, [
    viewportWidth,
    visibleImages,
    setVisibleImages,
    count4TotalImgsPerRow,
    count3TotalImgsPerRow,
  ]);

  // console.log("viewportWidth: ", `${viewportWidth}`);

  return (
    <div className="main-container">
      {isToTopVisible && <ScrollToTop />}
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
          visibleImages={visibleImages}
          setVisibleImages={setVisibleImages}
          setCount4TotalImgsPerRow={setCount4TotalImgsPerRow}
          setCount3TotalImgsPerRow={setCount3TotalImgsPerRow}
          setIsToTopVisible={setIsToTopVisible}
        />
        <Testimonials />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
