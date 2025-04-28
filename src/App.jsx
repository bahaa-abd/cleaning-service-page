import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import { WeAreHere } from "./components/weAreHere";
import { Wisdom } from "./components/wisdom";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import AOS from "aos";
import { Helmet } from "react-helmet";

import "aos/dist/aos.css";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  AOS.init();

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Rein Star - Professional Cleaning Services</title>
        <meta
          name="description"
          content="Rein Star provides high-quality and affordable home and office cleaning services in Goslar. Contact us at +49 1556 3567580 or rein-star.goslar@outlook.de ."
        />
        <meta
          name="keywords"
          content="cleaning service, Rein Star, home cleaning, office cleaning, Goslar cleaner, professional cleaner"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rein Star" />
        <meta name="contact:email" content="rein-star.goslar@outlook.de" />
        <meta name="contact:phone_number" content="+49 1556 3567580" />
        <meta name="contact:address_locality" content="Goslar" />
        <meta name="contact:postal_code" content="38642" />

        <meta
          property="og:title"
          content="Rein Star - Cleaning Services in Goslar"
        />
        <meta
          property="og:description"
          content="Book professional home and office cleaning in Goslar with Rein Star. Call us at +49 1556 3567580."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reinstar-goslar.de" />
        <meta
          property="og:image"
          content="https://reinstar-goslar.de/og-image.jpg"
        />
        <meta property="og:email" content="rein-star.goslar@outlook.de" />
        <meta property="og:phone_number" content="+49 1556 3567580" />
        <meta property="og:locality" content="Goslar" />
        <meta property="og:postal-code" content="38642" />
        <meta property="og:street-address" content="Goslar 38642" />
        <meta property="og:see_also" content="https://fb.com" />
        <meta property="og:see_also" content="https://instagram.com" />
        <link rel="canonical" href="https://reinstar-goslar.de" />
      </Helmet>

      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <div className="skew-c"></div>
      <WeAreHere />
      <div className="skew-cc"></div>
      <Wisdom />
      <div className="skew-c"></div>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
