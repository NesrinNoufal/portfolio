
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    // cleanup
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`navbar-container ${isDarkMode ? "dark" : ""}`}>
      {/* Background div placeholder, uncomment if needed */}
      {/* <div className="header-bg"></div> */}

      <nav className={`navbar ${isScroll ? "scrolled" : ""}`}>
        <a href="#to" className="logo-link">
          {/* <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="logo"
          /> */}
        </a>

        <ul className="nav-links desktop-only">
          <li><a href="#top" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About me</a></li>
          {/* <li><a href="#services" className="nav-link">Services</a></li> */}
          <li><a href="#work" className="nav-link">My Work</a></li>
          <li><a href="#contact" className="nav-link">Contact me</a></li>
        </ul>

        <div className="nav-actions">
          <button className="darkmode-toggle" onClick={() => setIsDarkMode(prev => !prev)} aria-label="Toggle Dark Mode">
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Dark Mode"
              className="icon"
            />
          </button>
          <a href="#contact" className="contact-btn desktop-only">
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="icon-small"
            />
          </a>
          <button className="menu-btn mobile-only" onClick={openMenu} aria-label="Open Menu">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="icon"
            />
          </button>
        </div>

        {/* Mobile side menu */}
        <ul ref={sideMenuRef} className="side-menu">
          <div className="close-btn-container">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Menu"
              className="icon-close"
              onClick={closeMenu}
            />
          </div>

          <li><a href="#top" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About me</a></li>
          <li><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
          <li><a href="#work" className="nav-link" onClick={closeMenu}>My Work</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact me</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
