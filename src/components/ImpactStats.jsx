import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaCheckCircle, FaCode, FaRocket } from 'react-icons/fa'
import './ImpactStats.css'

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ users: 0, projects: 0, goals: 0, success: 0 })

  const stats = [
    { 
      label: 'Projects Completed', 
      value: 11, 
      icon: FaCode, 
      color: '#6366f1',
      key: 'projects',
      suffix: '+'
    },
    { 
      label: 'Years of Coding', 
      value: 4, 
      icon: FaRocket, 
      color: '#8b5cf6',
      key: 'years',
      suffix: '+'
    },
    { 
      label: 'Technologies Mastered', 
      value: 15, 
      icon: FaCheckCircle, 
      color: '#d946ef',
      key: 'tech',
      suffix: '+'
    },
    { 
      label: 'Continuous Learning', 
      value: 100, 
      icon: FaUsers, 
      color: '#ec4899',
      key: 'learning',
      suffix: '%'
    },
  ]

  useEffect(() => {
    if (!isVisible) return

    const intervals = {}
    stats.forEach(stat => {
      let count = 0
      const increment = stat.value / 60
      intervals[stat.key] = setInterval(() => {
        count += increment
        if (count >= stat.value) {
          count = stat.value
          clearInterval(intervals[stat.key])
        }
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(count)
        }))
      }, 30)
    })

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval))
    }
  }, [isVisible])

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
          <h2 className="impact-stats-title">My Milestones</h2>
          <p className="impact-stats-subtitle">Real achievements in my development journey</p>
        </motion.div>

        <motion.div
          className="impact-stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setIsVisible(true)}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.key}
                className="impact-stat-card"
                variants={itemVariants}
              >
                <div className="impact-stat-icon-wrapper">
                  <Icon className="impact-stat-icon" style={{ color: stat.color }} />
                  <div 
                    className="impact-stat-icon-bg"
                    style={{ background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)` }}
                  />
                </div>
                <motion.div className="impact-stat-value">
                  {counters[stat.key]}{stat.suffix}
                </motion.div>
                <div className="impact-stat-label">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
