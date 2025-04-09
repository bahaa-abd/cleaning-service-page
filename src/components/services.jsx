import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export const Services = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Duration of animations
      once: true, // Animation will trigger only once when scrolled into view
    });
  }, []);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 data-aos="zoom-in">Unsere Dienstleistungen</h2>{" "}
          {/* Zoom-in for title */}
          <p data-aos="fade-up">
            {" "}
            {/* Fade-up for paragraph */}
            Wir bieten maßgeschneiderte Reinigungsdienste für private und
            gewerbliche Kunden. Ob Büro, Zuhause oder spezielle Einrichtungen
            wie Praxen – unser Team sorgt zuverlässig für Sauberkeit, Hygiene
            und Wohlbefinden. Vertrauen Sie auf Erfahrung, Sorgfalt und Qualität
            in jeder Ecke.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  data-aos={i % 2 === 0 ? "fade-up" : "fade-right"} // Different animations based on index
                >
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
