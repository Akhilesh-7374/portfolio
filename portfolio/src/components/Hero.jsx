import "./Hero.css";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI • ML • DJANGO • REACT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Oruganti
          <br />
          <span>Harshith</span>
          <br />
          Akhilesh
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Computer Science student passionate about Artificial Intelligence,
          Machine Learning and Full Stack Development. I enjoy building
          intelligent, scalable and modern web applications using Python,
          Django and React.
        </motion.p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Explore Projects
            <FaArrowRight />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/Akhilesh-7374"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/harshith-akhilesh-oruganti-035238357"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=harshithakhileshoruganti@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="circle-ring"></div>

        <img src={profile} alt="Harshith Akhilesh" />
      </motion.div>
    </section>
  );
}