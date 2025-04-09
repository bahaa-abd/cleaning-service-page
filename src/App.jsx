import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { WeAreHere } from "./components/weAreHere";
import { Wisdom } from "./components/wisdom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

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
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <div class="skew-c"></div>
      <WeAreHere />
      <div class="skew-cc"></div>
      <Wisdom />
      <div class="skew-c"></div>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
