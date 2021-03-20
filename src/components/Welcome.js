import React from "react";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="titles-wrapper">
        <div className="overlay-titles">
          {/* <div> */}
          <h1>Welcome to J. B. &#38; B. Construction</h1>
          {/* </div> */}
          {/* <div> */}
          <p>Serving the Entire Bay Area and its Surroundings</p>
          {/* </div> */}
        </div>
      </div>
      <div className="video">
        <div className="parallax"></div>
        <video
          muted
          loop
          autoPlay
          src="https://video.wixstatic.com/video/11062b_4f14b356c1df4854968cf1cc94ca98c5/1080p/mp4/file.mp4"
        ></video>
      </div>
    </section>
  );
};

export default Welcome;
