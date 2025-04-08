import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Unsere Dienstleistungen</h2>
          <p>
            Wir bieten maßgeschneiderte Reinigungsdienste für private und
            gewerbliche Kunden. Ob Büro, Zuhause oder spezielle Einrichtungen
            wie Kliniken – unser Team sorgt zuverlässig für Sauberkeit, Hygiene
            und Wohlbefinden. Vertrauen Sie auf Erfahrung, Sorgfalt und Qualität
            in jeder Ecke.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
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
