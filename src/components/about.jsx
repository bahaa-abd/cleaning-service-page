import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export const About = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1700, // Duration of animations
      once: true, // Animation will trigger only once when scrolled into view
    });
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6" data-aos="fade-up">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6" data-aos="fade-up">
            <div className="about-text">
              <h2 data-aos="zoom-in">Über uns</h2>
              <p data-aos="fade-up">
                {props.data ? props.data.paragraph : "loading..."}
              </p>
              <h3 data-aos="fade-right">Warum uns wählen?</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul data-aos="fade-right">
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`} data-aos="fade-up">
                            {d}
                          </li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
