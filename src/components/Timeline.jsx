import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaAward, FaBriefcase } from 'react-icons/fa'
import './Timeline.css'

export default function Timeline() {
  const timelineEvents = [
    {
      year: '2020',
      title: 'Started Coding Journey',
      description: 'Began learning web development with HTML, CSS, and JavaScript. First steps into creating beautiful, functional interfaces.',
      icon: FaCode,
      color: '#6366f1',
    },
    {
      year: '2021',
      title: 'Learning React & Backend',
      description: 'Mastered React and started exploring backend technologies. Built my first full-stack projects with meaningful functionality.',
      icon: FaRocket,
      color: '#8b5cf6',
    },
    {
      year: '2022',
      title: 'Building Real Projects',
      description: 'Developed diverse projects including e-commerce platforms, content management systems, and interactive applications.',
      icon: FaBriefcase,
      color: '#d946ef',
    },
    {
      year: '2024',
      title: 'Continuous Growth',
      description: 'Built 11+ projects showcasing expertise in React, Node.js, and modern web technologies. Committed to constantly improving my craft.',
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
          <h2 className="timeline-title">My Journey</h2>
          <p className="timeline-subtitle">From passion to expertise</p>
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
