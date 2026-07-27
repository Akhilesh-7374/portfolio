import "./Experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026 - Present",
    title: "AI & ML Student",
    company: "B.Tech CSE",
    desc: "Building Deep Learning, Computer Vision, Flask, PyTorch and AI applications while strengthening Data Structures & Algorithms."
  },
  {
    year: "2026",
    title: "Full Stack Developer",
    company: "Trimly",
    desc: "Developed a salon booking platform using React, Node.js, Express and MongoDB with authentication and booking features."
  },
  {
    year: "2026",
    title: "Django Developer",
    company: "Client Monitoring System",
    desc: "Designed and developed a CRM platform to manage clients, branches, payments, reports and support calls."
  },
  {
    year: "2025",
    title: "Started B.Tech",
    company: "Computer Science Engineering",
    desc: "Started my journey into software development, web technologies and Artificial Intelligence."
  }
];

export default function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="section-title">
        <h2>Experience</h2>
        <p>My Journey</p>
      </div>

      <div className="timeline">

        {experiences.map((item, index) => (

          <motion.div
            className={`timeline-item ${index % 2 ? "right" : "left"}`}
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.desc}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}