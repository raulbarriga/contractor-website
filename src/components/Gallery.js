import React, { useState, useEffect } from "react";
import { galleryData } from "../data/galleryData";
import ModalCarousel from "./ModalCarousel.js";

const Gallery = ({ visible, setVisible, setIsToTopVisible, viewportWidth }) => {
  // image data
  const [items, setItems] = useState(galleryData);
  // to open/close the ModalComponent popup
  const [isOpen, setIsOpen] = useState(false);
  // image from the gallery that is clicked on (to pass to the ModalCarousel component)
  const [selectedImg, setSelectedImg] = useState(null);
  // to save scroll position befor opening modal. It returns you to the same position when modal is closed.
  // Needed for fullscreen modal button since it kept sending to top of web page on modal close.
  const [scrollPosition, setScrollPosition] = useState();

  const loadMore = () => {
    if (viewportWidth <= 1200 && viewportWidth >= 840) {
      setVisible((prevValue) => prevValue + 3);
    } else {
      setVisible((prevValue) => prevValue + 4);
    }
  };

  //to update the css for the modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
console.log(visible)
  return (
    <section id="gallery" className="gallery-component">
      <div className="gallery-container">
        {items.slice(0, visible).map((item, index) => (
          <img
            src={item.mediaUrl}
            key={item.key}
            alt={item.mediaUrl}
            onClick={() => {
              //do not show the scroll to top button before modal will open
              setIsToTopVisible(false);
              //save the scroll position to restore it once modal is closed (fixing fullscreen api issue)
              setScrollPosition(window.pageYOffset);
              setIsOpen(true);
              setSelectedImg(item.key);
            }}
          />
        ))}
      </div>

      {visible < items.length && (
        <div className="btn-container">
          <button onClick={loadMore}>Load More</button>
        </div>
      )}


      {isOpen && (
        <ModalCarousel
          images={items}
          isOpen={isOpen}
          visible={visible}
          onClose={() => {
            window.scrollTo(0, scrollPosition);
            setIsOpen(false);
            // show the scroll to top button once modal closes
            setIsToTopVisible(false);
          }}
          selectedImg={selectedImg}
        ></ModalCarousel>
      )}
    </section>
  );
};

export default Gallery;
