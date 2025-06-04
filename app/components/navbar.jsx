// import React, { useRef, useState, useEffect } from "react";
// import Image from "next/image";
// import { assets } from "../../assets/assets";

// const Navbar = ({ isDarkMode, setIsDarkMode }) => {
//   const [isScroll, setIsScroll] = useState(false);
//   const sideMenuRef = useRef();

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = "translate(-16rem)";
//   };
//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = "translate(16rem)";
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (scrollY > 50) {
//         setIsScroll(true);
//       } else {
//         setIsScroll(false);
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <div
//         className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] */}
//         dark:hidden"
//       >
//         {/* <Image src={assets.header_bg_color} alt="" className='w-full'/> */}
//       </div>
//       <nav
//         className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
//         flex items-center justify-between z-50 ${
//           isScroll
//             ? "bg-white bg-opaity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
//             : ""
//         }`}
//       >
//         <a href="#to">
//           <Image
//             src={isDarkMode ? assets.logo_dark : assets.logo}
//             alt=""
//             className="w-28 
//             cursor-pointer mr-14"
//           />
//         </a>
//         <ul
//           className={`small:hidden md:flex items-center gap-6 lg:gap-8 
//           rounded-full px-12 py-3 ${
//             isScroll
//               ? ""
//               : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
//           }`}
//         >
//           <li>
//             <a className="font-Ovo" href="#top">
//               Home
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="about">
//               About me
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="services">
//               Services
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="work">
//               My Work
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="contact">
//               Contact me
//             </a>
//           </li>
//         </ul>
//         <div className="flex items-center gap-4">
//           <button onClick={() => setIsDarkMode((prev) => !prev)}>
//             <Image
//               src={isDarkMode ? assets.sun_icon : assets.moon_icon}
//               alt=""
//               className="w-6"
//             />
//           </button>
//           <a
//             href="contact"
//             className="hidden lg:flex items-center gap-3 px-10
//             py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
//           >
//             Contact
//             <Image
//               src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
//               className="w-3"
//               alt=""
//             ></Image>
//           </a>
//           <button className="block md:hidden ml-3">
//             <Image
//               src={isDarkMode ? assets.menu_white : assets.menu_black}
//               alt=""
//               className="w-6"
//               onClick={openMenu}
//             />
//           </button>
//         </div>

//         {/* --------------------mobile menu--------------- */}

//         <ul
//           ref={sideMenuRef}
//           className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0
//           top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
//         >
//           <div className="absolute right-6 top-6">
//             <Image
//               src={isDarkMode ? assets.close_white : assets.close_black}
//               alt=""
//               className="w-5
//                 cursor-pointer"
//               onClick={closeMenu}
//             />
//           </div>

//           <li>
//             <a className="font-Ovo" href="#top" onClick={closeMenu}>
//               Home
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="about" onClick={closeMenu}>
//               About me
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="services" onClick={closeMenu}>
//               Services
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="work" onClick={closeMenu}>
//               My Work
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="contact" onClick={closeMenu}>
//               Contact me
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };
// export default Navbar;

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
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="logo"
          />
        </a>

        <ul className="nav-links desktop-only">
          <li><a href="#top" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About me</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
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
