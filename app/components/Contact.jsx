
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "../../assets/assets";
import "./Contact.css"; // <-- Make sure to import the CSS

const Contact = ({isDarkMode}) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d7fdf672-7b25-427b-a173-039eb7dc2a1b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={`contact-container ${isDarkMode ? "dark" : ""}`}>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      className="contact-section"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="contact-subheading"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="contact-heading"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="contact-description"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="contact-form"
      >
        <div className="contact-input-group">
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="contact-input"
          />

          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="contact-input"
          />
        </div>

        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          viewport={{ once: true }}
          rows="6"
          placeholder="Enter your message"
          name="message"
          required
          className="contact-textarea"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          type="submit"
          className="contact-button"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="arrow" className="arrow-icon" />
        </motion.button>
        <p className="contact-result">{result}</p>
      </motion.form>
    </motion.div>
    </div>
  );
};

export default Contact;




