import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles

export const Wisdom = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of animations
      once: true, // Animation will trigger only once when scrolled into view
    });
  }, []);

  return (
    <div>
      <div id="wisdom" className="wisdom-section text-center">
        <div className="container" data-aos="zoom-in">
          <h2 className="wisdom-title">„Sauberkeit ist das halbe Leben.“</h2>
        </div>
      </div>
    </div>
  );
};
