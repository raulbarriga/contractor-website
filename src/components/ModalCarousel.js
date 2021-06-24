import React, { useState } from "react";
import {
  GrClose,
  GrExpand,
  GrPrevious,
  GrNext,
  // GrContract
} from "react-icons/gr";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import "./ModalCarousel.css";

const ModalCarousel = ({ isOpen, visible, setVisible, oldVisibleValue, onClose, images, selectedImg }) => {
  const [current, setCurrent] = useState(selectedImg - 1);
  const length = images.length;
  const handle = useFullScreenHandle();

  if (!isOpen) {
    return null;
  }

  //I just left the buttons like an infinite carousel since the buttons will disable on first or last slide
  const prevSlide = () => {
    //length - 1 is for the first slide position (need to change the style to disabled on the button)
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    //0 is for the last slide position (need to change the style to disabled on the button)
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return createPortal(
    <>
      <div
        id="modal"
        className={isOpen ? "modal-container open" : "modal-container"}
      >
        <div className="slider">
          <button
            className={current === 0 ? "btn prev disable-btn" : "btn prev"}
            onClick={prevSlide}
          >
            <GrPrevious size="large" color="black" />
          </button>
          <button
            className={
              current === length - 1 ? "btn next disable-btn" : "btn next"
            }
            onClick={nextSlide}
          >
            <GrNext size="large" color="black" />
          </button>
          <div className="image-wrapper">
            <FullScreen 
            handle={handle}
            className="my-component">
              <motion.img
                id="image"
                key={images[current].key}
                src={images[current].mediaUrl}
                alt={images[current].mediaUrl}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // was 0.3 before. 0.5 looks good
                transition={{ duration: 0.5, ease: [0.27, 0.11, 0.26, 1] }}
                onClick={handle.exit}
              />
            </FullScreen>
          </div>
        </div>
        <div className="nav-container">
          <div className="fullscreen-wrapper">
            <button>
              {/* Don't need this since on fullscreen currently does not have extra functionalities besides exiting
			  {handle.enter === false ? (
              <GrContract
                className="GrExpand"
                size="large"
                color="black"
                onClick={handle.exit}
              />
            ) : ( */}
              <GrExpand
                className="GrExpand"
                size="large"
                color="black"
                onClick={() => {
                  handle.enter();
                  setVisible(oldVisibleValue);
                  console.log("visible state after handle.enter(): ", visible);
                }}
              />
              {/* )} */}
            </button>
          </div>

          <div className="exit-wrapper">
            <button
              onClick={onClose}
            >
              <GrClose className="GrClose" size="large" color="black" />
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default ModalCarousel;
