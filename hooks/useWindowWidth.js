// Note: this one includes a built-int debounce function using setTimeout()
// from https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
import { useState, useEffect } from "react";

const useWindowWidth = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      let timeoutId = null;
      // Handler to call on window resize
      function handleResize() {
        clearTimeout(timeoutId);
        // Set window width to state
        timeoutId = setTimeout(setWindowWidth(window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth), 150);
        // console.log('windowWidth: ', windowWidth);
      }
    
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
  }
  }, []); // Empty array ensures that effect is only run on mount
  return windowWidth;
}

export default useWindowWidth;