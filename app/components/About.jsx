
import { toolsData } from "../../assets/assets";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets, infoList } from "../../assets/assets";
import "./About.css";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const About = ({ isDarkMode }) => {
  return (
    <div className={`about-container ${isDarkMode ? "dark" : ""}`}>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="about"
      className="about-container"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="about-intro"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="about-title"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="about-content"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-image-container"
        >
          {/* <Image src={assets.user_image} alt="user" className="about-image" /> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="about-text-container"
        >
          <p className="about-description">
          Passionate Full Stack Developer with 2 years of experience building scalable web applications.
           Adept at optimizing API performance, implementing real-time features, and enhancing user experience. Seeking opportunities to contribute to 
           high-performance applications. 
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="about-info-list"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className={`about-info-item ${isDarkMode ? "dark" : ""}`}
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="info-icon"
                />
                <h3 className="info-title">{title}</h3>
                <p className="info-description">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: true }}
            className={`tools-heading ${isDarkMode ? "dark" : ""}`}
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            viewport={{ once: true }}
            className="tools-list"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="tool-item"
                key={index}
              >
               <Tooltip title={tool.tool}>
               <Image src={tool.icon} alt="Tool" className="tool-icon" />
               </Tooltip>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default About;


