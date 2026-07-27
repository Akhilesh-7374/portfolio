import "./Skills.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiBootstrap,
  SiTensorflow,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Java", icon: <FaJava /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">

      <motion.div
        className="skills-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Technical Skills</h2>
        <p>Technologies I use to build modern applications.</p>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.08, y: -10 }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
}