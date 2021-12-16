import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import Image from "next/image";

// import WelcomeImg from "../public/images/Welcome.jpg";

const Welcome = () => {
  const [mobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);

  return (
    <section className="welcome">
      {mobile && (
        <Image
          // placeholder="blur"
          className="mobileBackgroundImage"
          src={"https://res.cloudinary.com/raba64577/image/upload/c_scale,w_704,q_100/v1633633805/JB%20and%20B%20Construction%2C%20Inc./Remodeling/image8.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Welcome image"
        />
      )} 
      <div className="opacity-layer"></div>
      {!mobile && (
        <div className="video-layer">
          <video
            muted
            playsInline
            poster={"https://res.cloudinary.com/raba64577/image/upload/c_scale,w_704,q_100/v1633633805/JB%20and%20B%20Construction%2C%20Inc./Remodeling/image8.jpg"}
            loop
            autoPlay
          >
            {/* a better quality of images video */}
            {/* but it's 70.18MB on Cloudinary (for desktops/laptops only) */}
            <source
              src="https://res.cloudinary.com/raba64577/video/upload/v1639683986/JB%20and%20B%20Construction%2C%20Inc./Tio-Jorge_Better-Quality2_jep2wd.mp4"
              type="video/mp4"
            />
            {/* <source
              src="https://video.wixstatic.com/video/11062b_4f14b356c1df4854968cf1cc94ca98c5/1080p/mp4/file.mp4"
              type="video/mp4"
            /> */}
          </video>
        </div>
      )} 
      <div className="title-wrapper">
        <h1>Welcome to JB & B Construction, Inc.</h1>
        <div className="text-wrapper">
          <p>Serving the Entire Bay Area and its Surroundings</p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
