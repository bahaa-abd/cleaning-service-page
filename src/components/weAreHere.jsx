import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export const WeAreHere = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Animation will trigger only once when scrolled into view
    });
  }, []);

  return (
    <div id="we-are-here" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 data-aos="fade-up">Wir sind hier, um Ihnen zu helfen</h2>{" "}
          {/* Fade up for the title */}
          <p data-aos="fade-up" data-aos-delay="300">
            „Wir bei Rein Star kümmern uns um Ihre Gesundheit. Jetzt anrufen und
            ein tolles Angebot sichern!“
          </p>{" "}
          {/* Fade up with a slight delay for the paragraph */}
        </div>
      </div>
    </div>
  );
};
