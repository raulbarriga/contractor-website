import React from "react";
import { isMobile } from "react-device-detect";

import WelcomeImg from "../assets/images/Welcome.jpg";

const Welcome = () => {
  return (
    <section
        className="welcome"
        style={{
          backgroundImage: `${isMobile ? 
            "url(" + WelcomeImg + ")"
            : "none"}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="opacity-layer"></div>
        {!isMobile && (
          <div className="video-layer">
            <video
              muted
              playsInline
              // poster={WelcomeImg}
              loop
              autoPlay
            >
              <source
                src="https://video.wixstatic.com/video/11062b_4f14b356c1df4854968cf1cc94ca98c5/1080p/mp4/file.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        )}
        <div className="title-wrapper">
          <h1>Welcome to JB & B Construction, Inc.</h1>
        </div>
        <div className="text-wrapper">
          <p>Serving the Entire Bay Area and its Surroundings</p>
        </div>
      </section>
  );
};

export default Welcome;
