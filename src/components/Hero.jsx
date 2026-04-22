import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  const roles = ['Senior Frontend Engineer', 'React Specialist', 'UI/UX Developer', 'Problem Solver']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300, damping: 15 },
    },
    tap: {
      scale: 0.98,
    },
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            Samson Ogundero Tobiloba
          </motion.h1>
          
          <motion.div className="hero-subtitle-wrapper" variants={itemVariants}>
            <span className="hero-label">I'm a</span>
            <motion.p 
              className="hero-subtitle"
              key={currentRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.p>
          </motion.div>
          
          <motion.p className="hero-description" variants={itemVariants}>
            I craft high-performance React applications that scale. From AI platforms serving 1000+ users to e-commerce marketplaces with complex seat selection systems, I build polished interfaces that solve real business problems with precision and attention to detail. With expertise in modern JavaScript, React hooks, and performance optimization, I transform complex requirements into elegant, user-centric solutions delivering interfaces that users love and businesses rely on.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View Projects <FiArrowRight />
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Hire Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-background">
        <div className="gradient-circle gradient-1"></div>
        <div className="gradient-circle gradient-2"></div>
        <div className="gradient-circle gradient-3"></div>
      </div>
    </section>
  )
}
