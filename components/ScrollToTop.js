import React, { useEffect, useState } from "react";
import { GrUp } from "react-icons/gr"
import { isMobile } from "react-device-detect";

export default function ScrollToTop() {
  const [mobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile)
  }, [setMobile])
  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div id="scroll-to-top" className="scroll-to-top"
          style={{ cursor: mobile ? "none" : "pointer"}} 
    >
        <div onClick={scrollToTop}>
          <GrUp size="large" 
          />
        </div>
    </div>
  );
}
