import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

import trimly from "../assets/projects/trimly.png";
import contrail from "../assets/projects/contrail.png";
import client from "../assets/projects/client-monitoring.png";

const projects = [
  {
    title: "Trimly",
    image: trimly,
    description:
      "Modern salon booking platform with authentication, appointment scheduling and responsive UI.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },

  {
    title: "ContrailVision",
    image: contrail,
    description:
      "Deep Learning project for detecting aviation contrails using satellite imagery.",
    tech: ["Python", "Flask", "PyTorch"],
    github: "#",
    demo: "#",
  },

  {
    title: "Client Monitoring System",
    image: client,
    description:
      "Django-based CRM to manage clients, payments, support calls and reports.",
    tech: ["Django", "SQLite", "Bootstrap"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">

      <motion.div
        className="project-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Featured Projects</h2>
        <p>Some projects I've built recently.</p>
      </motion.div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ y: -12 }}
            transition={{ duration: .3 }}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">

                <a href={project.github}>
                  <FaGithub /> GitHub
                </a>

                <a href={project.demo}>
                  <FaExternalLinkAlt /> Demo
                </a>

              </div>

            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}