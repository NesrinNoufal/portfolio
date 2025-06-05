import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets, serviceData } from "../../assets/assets";
import "./Services.css";

const Services = ({isDarkMode}) => {
  return (
    <div className={`services-container ${isDarkMode ? "dark" : ""}`}>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="services"
      className="services"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="services-subtitle"
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="services-title"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="services-description"
      >
        I am an experienced full stack developer with over two years of
        professional expertise in the field. Throughout my career, I have had the
        privilege of collaborating with prestigious organizations, contributing
        to their success and growth.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
        className="services-grid"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="service-card"
          >
            <Image src={icon} alt={title} className="service-icon" />
            <h3 className="service-title">{title}</h3>
            <p className="service-text">{description}</p>
            <a href={link} className="service-link">
              Read more
              <Image alt="arrow" src={assets.right_arrow} className="link-arrow" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    </div>
  );
};

export default Services;
