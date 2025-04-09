import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export const Testimonials = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Animation will trigger only once when scrolled into view
    });
  }, []);

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Was unsere Kunden sagen</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  data-aos={i % 2 === 0 ? "fade-up" : "fade-right"} // Alternating animations for each testimonial
                >
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <p data-aos="fade-up">"{d.text}"</p>{" "}
                      {/* Fade-up for testimonial text */}
                      <div className="testimonial-meta" data-aos="fade-down">
                        - {d.name}
                      </div>{" "}
                      {/* Fade-down for author */}
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
