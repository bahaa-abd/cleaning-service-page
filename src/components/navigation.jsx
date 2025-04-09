import React, { useState, useEffect } from "react";

export const Navigation = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Effect to monitor window size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Remove collapse when viewport is wide (desktop)
        setIsCollapsed(false);
      } else {
        // Keep collapse when viewport is narrow (mobile/tablet)
        setIsCollapsed(true);
      }
    };

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Call it initially to set the correct state on page load
    handleResize();

    // Clean up listener when component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsCollapsed((prevState) => !prevState); // Toggle collapsed state
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle ${isCollapsed ? "collapsed" : ""}`} // Apply collapsed class conditionally
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            onClick={toggleNavbar} // Handle toggle manually
            aria-expanded={!isCollapsed} // Set aria-expanded based on isCollapsed state
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <div className="navbar-link">
              <span>
                <img src="img/logo.jpg" alt="Logo" className="navbar-logo" />
              </span>
              <span> rein star</span>
            </div>
          </a>
        </div>

        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "in"}`} // Toggle collapse class based on state
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Über uns
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Dienstleistungen
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Kundenmeinungen
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
