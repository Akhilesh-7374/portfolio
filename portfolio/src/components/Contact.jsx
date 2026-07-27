import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h2>Get In Touch</h2>
        <p>
          I'm always open to internship opportunities, collaborations, and
          exciting projects.
        </p>
      </div>

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="info-card">
          <FaEnvelope />
          <div>
            <h4>Email</h4>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=harshithakhileshoruganti@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              harshithakhileshoruganti@gmail.com
            </a>
          </div>
        </div>

        <div className="info-card">
          <FaPhoneAlt />
          <div>
            <h4>Phone</h4>
            <p>+91 XXXXX XXXXX</p>
          </div>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt />
          <div>
            <h4>Location</h4>
            <p>Andhra Pradesh, India</p>
          </div>
        </div>

        <div className="socials">
          <a
            href="https://github.com/Akhilesh-7374"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/harshith-akhilesh-oruganti-035238357"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}