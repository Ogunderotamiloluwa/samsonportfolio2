import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaAward, FaBriefcase } from 'react-icons/fa'
import './Timeline.css'

export default function Timeline() {
  const timelineEvents = [
    {
      year: 'HTML & CSS',
      title: 'Web Fundamentals',
      description: 'Mastered semantic HTML and modern CSS including Flexbox, Grid, and responsive design principles.',
      icon: FaCode,
      color: '#6366f1',
    },
    {
      year: 'React & Modern Frontend',
      title: 'Interactive Development',
      description: 'Built strong proficiency in React, ES6+, hooks, component-based architecture, and creating dynamic user interfaces.',
      icon: FaRocket,
      color: '#8b5cf6',
    },
    {
      year: 'State Management',
      title: 'Advanced Frontend',
      description: 'Mastered advanced React patterns including hooks, context API, state management, and component optimization techniques.',
      icon: FaBriefcase,
      color: '#d946ef',
    },
    {
      year: 'Advanced Tools',
      title: 'Professional Workflow',
      description: 'Mastered Vite, git/GitHub, API design, authentication, and modern development best practices.',
      icon: FaAward,
      color: '#ec4899',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <motion.div
          className="timeline-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="timeline-title">Technical Achievements</h2>
          <p className="timeline-subtitle">Key skills and expertise I've developed</p>
        </motion.div>

        <motion.div
          className="timeline-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineEvents.map((event, index) => {
            const Icon = event.icon
            return (
              <motion.div key={index} className="timeline-item" variants={itemVariants}>
                <div className="timeline-marker" style={{ background: event.color }}>
                  <Icon className="timeline-icon" />
                </div>
                <div className="timeline-content-box">
                  <div className="timeline-year">{event.year}</div>
                  <h3 className="timeline-event-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </motion.div>
            )
          })}
          <div className="timeline-line" />
        </motion.div>
      </div>
    </section>
  )
}
