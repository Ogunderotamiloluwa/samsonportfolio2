import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaLightbulb, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa'
import './ImpactStats.css'

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false)

  const approaches = [
    { 
      label: 'Think First', 
      description: 'Plan and understand requirements before coding',
      icon: FaLightbulb, 
      color: '#6366f1',
    },
    { 
      label: 'Clean Code', 
      description: 'Write readable, maintainable, and scalable solutions',
      icon: FaCode, 
      color: '#8b5cf6',
    },
    { 
      label: 'Test Thoroughly', 
      description: 'Ensure quality through testing and debugging',
      icon: FaCheckCircle, 
      color: '#d946ef',
    },
    { 
      label: 'Iterate & Improve', 
      description: 'Continuously refine based on feedback and learning',
      icon: FaRocket, 
      color: '#ec4899',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="impact-stats-section">
      <div className="impact-stats-container">
        <motion.div
          className="impact-stats-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="impact-stats-title">My Creative Approach</h2>
          <p className="impact-stats-subtitle">How I build exceptional solutions</p>
        </motion.div>

        <motion.div
          className="impact-stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {approaches.map((approach, index) => {
            const Icon = approach.icon
            return (
              <motion.div
                key={index}
                className="impact-stat-card"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
              >
                <div className="stat-icon" style={{ background: approach.color }}>
                  <Icon />
                </div>
                <h3>{approach.label}</h3>
                <p>{approach.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
