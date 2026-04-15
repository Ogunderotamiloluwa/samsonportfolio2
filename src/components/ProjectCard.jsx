import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './ProjectCard.css'

export default function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.08,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)' }}
    >
      <motion.div className="project-image" variants={imageVariants} whileHover="hover">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
            <FiGithub size={24} />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-link">
            <FiExternalLink size={24} />
          </a>
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">
            <FiGithub /> Code
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-btn primary">
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
