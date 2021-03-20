import React from "react";
import { ProGallery } from "pro-gallery";


const Gallery = () => {
  // Add your images here...
  const items = [];

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 2,
    enableInfiniteScroll: false,
    titlePlacement: "",
    scrollAnimation: "ZOOM_OUT",
    loadMoreAmount: "partial",
    hoveringBehaviour: "NEVER_SHOW",
    imageHoverAnimation: "DARKENED",
    imageLoadingMode: "MAIN_COLOR",
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <ProGallery
      items={items}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  );
};

export default Gallery;
