import React, { useState } from "react";
import { useLockBodyScroll } from "react-use";
import Image from "next/image";
import dynamic from "next/dynamic";

import { galleryData } from "./data/galleryData";

const ModalCarousel = dynamic(() => import("./ModalCarousel/ModalCarousel"));

const Gallery = ({
  visibleImages,
  setVisibleImages,
  viewportWidth,
  setCount3TotalImgsPerRow,
  setCount4TotalImgsPerRow,
  setIsToTopVisible,
}) => {
  // image data
  const [items, setItems] = useState(galleryData);
  // to open/close the ModalComponent popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  // image from the gallery that is clicked on (to pass to the ModalCarousel component & begin the carousel from there)
  const [selectedImg, setSelectedImg] = useState(null);
  // to save scroll position befor opening modal. It returns you to the same position when modal is closed.
  // Needed for fullscreen modal button since it kept sending to top of web page on modal close.
  const [scrollPosition, setScrollPosition] = useState(); // don't need it after I used the custom hook

  const loadMore = () => {
    // methods to compare to visibleImages and set the correct # of images per row when resizing the browser
    setCount3TotalImgsPerRow((prevValue) => (prevValue += 3));
    setCount4TotalImgsPerRow((prevValue) => (prevValue += 4));

    if (`${viewportWidth}` <= 1200 && `${viewportWidth}` >= 840) {
      setVisibleImages((prevValue) => prevValue + 3);
    } else {
      //will add the respective count variable to Gallery.js to count from there. They'll be used to compare in App.js and add/remove images that way in App.js
      setVisibleImages((prevValue) => prevValue + 4);
    }
  };

  //to update the css for the modal when it's opened(i.e. prevent scrolling)
  useLockBodyScroll(isModalOpen);

  return (
    <section id="gallery" className="gallery-component">
      <div className="gallery-container">
        {items.slice(0, visibleImages).map((item, index) => (
          <div key={index} className="img">
            <Image
              src={item.mediaUrl}
              key={index}
              alt={item.mediaUrl}
              layout="fill"
              unoptimized={true}
              // placeholder="blur"
              onClick={() => {
                //save the scroll position to restore it once modal is closed (fixing fullscreen api issue)
                setScrollPosition(window.pageYOffset);
                setIsModalOpen(true);
                setIsToTopVisible(false); // don't show the scroll-to-top btn
                setSelectedImg(index);
              }}
            />
          </div>
        ))}
      </div>

      {visibleImages < items.length && (
        <div className="btn-container">
          <button onClick={loadMore}>Load More</button>
        </div>
      )}

      {isModalOpen && (
        <ModalCarousel
          images={items}
          isModalOpen={isModalOpen}
          visibleImages={visibleImages}
          onClose={() => {
            window.scrollTo(0, scrollPosition);
            setIsModalOpen(false);
            setIsToTopVisible(true); // show the scroll-to-top btn
          }}
          selectedImg={selectedImg}
        ></ModalCarousel>
      )}
    </section>
  );
};

export default Gallery;
