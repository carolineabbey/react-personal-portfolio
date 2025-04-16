import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import './Home.css';
export default function Home() {
  return (
    <>
      <section className="home-styling">
        <div className="styling-overlay"></div>
        <div className="styling-text">
          <h1>Hi, I'm Caroline Abbey!<br />Aspiring UX Designer</h1>
          <ScrollLink
            to="about-section"
            smooth={true}
            duration={600}
            offset={-60}
            className="scroll-button"
          >
            Learn More
          </ScrollLink>
        </div>
      </section>
      <Element name="about-section">
        <motion.section
          className="about-inline"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            Hi! My name is Caroline, and I am an Interactive Web Development student with a strong
            foundation in digital media and a passion for creativity and user experience design. I have
            experience in customer service and teamwork, and I am adept at utilizing Adobe, Figma, and
            web development languages to create engaging user experiences. I am committed to leveraging
            problem-solving skills and staying updated with industry trends to contribute effectively to
            innovative digital projects.
          </p>
          <br></br>
          <h3>Skills</h3>
          <ul>
            <li>Adobe XD</li>
            <li>HTML</li>
            <li>Figma</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>User Research</li>
            <li>Interaction Design</li>
          </ul>
          </motion.section>
        </Element>
    </>
  );
}