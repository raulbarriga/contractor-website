import React, { useState, useEffect } from "react";
// import { galleryData } from '../data/galleryData'; //real pictures
import { galleryData } from "../data/galleryData"; // dummy test images

const Gallery = () => {
  const [items, setItems] = useState(galleryData);
  const [visible, setVisible] = useState(4);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  // <div className="grid-item" key={item.mediaUrl}></div>
  return (
    <section className="gallery-component">
      <div className="gallery-container">
        {items.slice(0, visible).map((item) => (
          <img src={item.mediaUrl} key={item.mediaUrl} alt={item.mediaUrl} />
        ))}
      </div>

      {visible < items.length && (
        <div className="btn-container">
          <button onClick={loadMore}>Load More</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
