
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "../../assets/assets";
import './Header.css';


const Header = ({ isDarkMode }) => {
  return (
    <div className={`header-container ${isDarkMode ? "dark" : ""}`}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="profile-img" 
        width={250} height={300}
         />
      </motion.div>
      <motion.h3  
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="intro-text"
      >
        Hi! I'm Nesrin Noufal
        <Image src={assets.hand_icon} alt="" className="hand-icon" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="header-title"
      >
        fullstack web developer based in India.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="header-description"
      >
        I am a fullstack developer from Kerala,India with 2 years of experience
        in relevent field.
      </motion.p>
      <div className="header-buttons">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          href="#contact"
          className="btn contact-btn"
        >
          contact me <Image src={assets.arrow_icon} alt="" className="icon" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          href="/nesrinnoufal_resume.pdf"
          // download
          className="btn resume-btn"
        >
          my resume <Image src={assets.download_icon} alt="" className="icon" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          href="https://github.com/NesrinNoufal"
          className="btn contact-btn"
        >
          github <Image src={assets.git} alt="" className="icon" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
