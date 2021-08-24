import React, { useEffect, useState, useRef } from "react";
import {
  GrClose,
  GrExpand,
  GrPrevious,
  GrNext
  // GrContract
} from "react-icons/gr";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEvent, useFullscreen, useToggle } from "react-use";
import { isMobile } from "react-device-detect";

import "./ModalCarousel.css";

const ModalCarousel = ({ isModalOpen, onClose, images, selectedImg }) => {
  const [currentImg, setCurrentImg] = useState(selectedImg - 1);
  const length = images.length;

  // for the modal keyboard controls
  const ESCAPE_KEYS = ["27", "Escape"];
  const ARROWLEFT_KEYS = ["37", "ArrowLeft"];
  const ARROWRIGHT_KEYS = ["39", "ArrowRight"];

  // for fullscreen
  const ref = useRef(null);
  const [show, toggle] = useToggle(false); // show is the state variable and toggle is the handler method
  useFullscreen(ref, show, {
    onClose: () => toggle(false)
  });

  useEffect(() => {
    if (!isModalOpen) {
      return null;
    }
  }, [isModalOpen]);

  //I just left the buttons like an infinite carousel since the buttons will disable on first or last slide
  const prevSlide = () => {
    //length - 1 is for the first slide position; it will not go to the last item from the first item (i.e. infinite carousel)
    setCurrentImg(currentImg === 0 ? currentImg : currentImg - 1);
  };
  const nextSlide = () => {
    //0 is for the last slide position; it will stop at the last image item
    setCurrentImg(currentImg === length - 1 ? currentImg : currentImg + 1);
  };

  const keypressHandler = ({ key }) => {
    // e = e || window.event;
    if (ARROWLEFT_KEYS.includes(String(key))) {
      // setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1); //left <- show Prev image
      prevSlide();
      console.log("Left key pressed!");
    }
    if (ARROWRIGHT_KEYS.includes(String(key))) {
      // right -> show next image
      // setCurrentImg(currentImg + 1);
      nextSlide();
      console.log("Right key pressed!");
    }
    if (ESCAPE_KEYS.includes(String(key))) {
      onClose();
      console.log("Escape key pressed!");
    }
    // console.log("event: ", e);
  };

  useEvent("keydown", keypressHandler);

  return createPortal(
    <>
      <div
        id="modal"
        className={isModalOpen ? "modal-container open" : "modal-container"}
      >
        <div className="slider">
          <button
            className={currentImg === 0 ? "btn prev disable-btn" : "btn prev"}
            onClick={prevSlide}
          >
            <GrPrevious size="25" color="black" />
          </button>
          <button
            className={
              currentImg === length - 1 ? "btn next disable-btn" : "btn next"
            }
            onClick={nextSlide}
          >
            <GrNext size="25" color="black" />
          </button>
          <div className="image-wrapper">
            <div className="my-component">
              <motion.img
                id="ModalImage"
                ref={ref}
                key={images[currentImg].key}
                src={images[currentImg].mediaUrl}
                alt={images[currentImg].mediaUrl}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // was 0.3 before. 0.5 looks good
                transition={{ duration: 0.5, ease: [0.27, 0.11, 0.26, 1] }}
                onClick={() => toggle(false)}
              />
            </div>
          </div>
        </div>
        <div className="nav-container">
          <div className={`fullscreen-wrapper ${isMobile ? "hide" : ""}`}>
            <button>
              {/* Don't need this since on fullscreen currentImgly does not have extra functionalities besides exiting
          {handle.enter === false ? (
                <GrContract
                  className="GrExpand"
                  size="25"
                  color="black"
                  onClick={handle.exit}
                />
              ) : ( */}
              <GrExpand
                className="GrExpand"
                size="25"
                color="black"
                onClick={() => toggle()}
              />
              {/* )} */}
            </button>
          </div>

          <div className="exit-wrapper">
            <button onClick={onClose}>
              <GrClose className="GrClose" size="28" color="black" />
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default ModalCarousel;
