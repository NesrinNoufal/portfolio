// import React from 'react'
// import Image from 'next/image'
// import {assets} from '../../assets/assets'

// const Footer = ({isDarkMode}) => {
//   return (
//     <div className='mt-20'>
//       <div className='text-center'>
//         <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>
//         <div className='w-max flex items-center gap-2 mx-auto'>
//           <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
//             nesrinnoufal99@gmail.com
//         </div>
        
//       </div>

//       <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
//         <p>@ 2025 Nesrin Noufal. All rights reserved</p>
//         <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
//           <li><a target='_blank' href="https://instagram.com/nesrin_noufal">Github</a></li>
//           <li><a target='_blank' href="https://instagram.com/nesrin_noufal">LinkedIn</a></li>
//           <li><a target='_blank' href="https://instagram.com/nesrin_noufal">Twitter</a></li>
//         </ul>
//       </div>
//     </div>
//   )
// }
// export default Footer;


import React from 'react';
import Image from 'next/image';
import { assets } from '../../assets/assets';
import './Footer.css'; // Import CSS

const Footer = ({ isDarkMode }) => {
  return (
    <div className={`footer-container ${isDarkMode ? 'dark' : ''}`}>
      <div className="footer-top text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="footer-logo"
        />
        <div className="footer-contact flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail icon"
            className="mail-icon"
          />
          nesrinnoufal99@gmail.com
        </div>
      </div>

      <div className="footer-bottom text-center sm:flex items-center justify-between border-t mx-[10%] mt-12 py-6">
        <p className="copyright">@ 2025 Nesrin Noufal. All rights reserved</p>
        <ul className="footer-links flex items-center gap-10 justify-center mt-4 sm:mt-0">
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
