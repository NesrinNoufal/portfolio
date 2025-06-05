import { assets, workData } from "../../assets/assets";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Work.css"

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="work"
      className={`work-container${isDarkMode ? " dark" : ""}`}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="work-subtitle"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="work-title"
      >
        My latest work
      </motion.h2>

      <p
        className="work-description"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end and back-end development.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
        className="work-grid"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            key={index}
            className="work-card"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="work-card-info">
              <div>
                <h2 className="work-card-title">{project.title}</h2>
                <p className="work-card-description">{project.description}</p>
              </div>
              <div className="work-card-icon">
                <Image src={assets.send_icon} alt="send-icon" width={20} height={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        viewport={{ once: true }}
        href="#"
        className="show-more-btn"
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          width={16}
          height={16}
          className="arrow-icon"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
