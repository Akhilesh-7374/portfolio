import "./About.css";
import { FaUserGraduate, FaLaptopCode, FaBrain, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="about-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>Passionate Developer • AI Enthusiast • Lifelong Learner</p>
      </motion.div>

      <div className="about-content">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h3>Hello 👋</h3>

          <p>
            I'm <strong>Oruganti Harshith Akhilesh</strong>, a Computer
            Science student specializing in Artificial Intelligence.
          </p>

          <p>
            I enjoy building modern web applications using React,
            Django and Python while exploring Artificial Intelligence,
            Machine Learning and Computer Vision.
          </p>

          <p>
            My goal is to create impactful software that solves
            real-world problems with clean design and scalable code.
          </p>

        </motion.div>

        <motion.div
          className="about-cards"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="card">
            <FaUserGraduate />
            <h4>B.Tech CSE</h4>
            <p>Artificial Intelligence</p>
          </div>

          <div className="card">
            <FaLaptopCode />
            <h4>Full Stack</h4>
            <p>React • Django</p>
          </div>

          <div className="card">
            <FaBrain />
            <h4>AI / ML</h4>
            <p>Deep Learning & Python</p>
          </div>

          <div className="card">
            <FaRocket />
            <h4>Goal</h4>
            <p>Software Engineer</p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}