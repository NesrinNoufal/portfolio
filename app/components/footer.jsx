import React from 'react';
import Image from 'next/image';
import { assets } from '../../assets/assets';
import './Footer.css'; 

const Footer = ({isDarkMode }) => {
  return (
    <div className={`footer-container ${isDarkMode ? "dark" : ''}`}>
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="footer-logo"
        />
        <div className="footer-contact ">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail icon"
            className="mail-icon"
          />
          nesrinnoufal99@gmail.com
        </div>
      

      <div className="footer-bottom ">
        <p className="copyright">@ 2025 Nesrin Noufal. All rights reserved</p>
        <ul className="footer-links">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/nesrin_noufal">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/nesrin_noufal">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/nesrin_noufal">
              Twitter
            </a>
          </li>
        </ul>
      </div>
      </div>
    
  );
};

export default Footer;
