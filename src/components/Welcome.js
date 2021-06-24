import React from "react";
import WelcomeImg from "../assets/images/Welcome.jpg";

const Welcome = () => {
  return (
    // <section className="welcome">
      
    //   <div className="titles-wrapper">
    //     <div className="overlay-titles">
    //       <h1>Welcome to J. B. &#38; B. Construction</h1>
    //       <p>Serving the Entire Bay Area and its Surroundings</p>
    //     </div>
    //   </div>
    //   <div className="video">
    //     <video
    //       muted
    //       playsInline
    //       // poster={WelcomeImg}
    //       loop
    //       autoPlay
    //     >
    //       <source src="https://video.wixstatic.com/video/11062b_4f14b356c1df4854968cf1cc94ca98c5/1080p/mp4/file.mp4" type="video/mp4" />
    //     </video>
    //   </div>
    // </section>
    <section className="welcome">
      <div className="bottom-layer">
        <video
          muted
          playsInline
          // poster={WelcomeImg}
          loop
          autoPlay
        >
          <source src="https://video.wixstatic.com/video/11062b_4f14b356c1df4854968cf1cc94ca98c5/1080p/mp4/file.mp4" type="video/mp4" />
        </video>
      </div>
      {/* <div className="titles-wrapper">
        <div className="overlay-titles"> */}
        <div className="top-layer">
          <h1>Welcome to JB &#38; B Construction, Inc.</h1>
          <p>Serving the Entire Bay Area and its Surroundings</p>
        </div>
        {/* </div>
      </div> */}
      
    </section>
  );
};

export default Welcome;
