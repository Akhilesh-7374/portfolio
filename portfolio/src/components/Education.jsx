import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science Engineering (AI)",
    college: "Bennett University",
    duration: "2024 - 2028",
    description:
      "Currently pursuing B.Tech with specialization in Artificial Intelligence. Focusing on AI/ML, Full Stack Development, Data Structures & Algorithms, and Software Engineering.",
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="section-title">
        <h2>Education</h2>
        <p>Academic Background</p>
      </div>

      {education.map((item, index) => (
        <motion.div
          className="education-card"
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">
            <span>{item.duration}</span>

            <h3>{item.degree}</h3>

            <h4>{item.branch}</h4>

            <h5>{item.college}</h5>

            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}