import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { AiOutlineDownload } from 'react-icons/ai'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
    exit: { opacity: 0, scale: 0.8, y: -10 },
  }

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>Samson Ogundero</h1>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('about')}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')}>
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('services')}>
              Services
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </li>
          <li>
            <a 
              href="/Samson_Ogundero_Resume.html" 
              download
              className="resume-btn"
              target="_blank"
            >
              <AiOutlineDownload /> Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Floating Grid Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {menuItems.map((item, idx) => (
              <motion.button
                key={idx}
                className="mobile-menu-item"
                variants={itemVariants}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="menu-label">{item.label}</span>
              </motion.button>
            ))}
            <motion.a
              href="/Samson_Ogundero_Resume.html"
              download
              target="_blank"
              className="mobile-menu-item resume-item"
              variants={itemVariants}
            >
              <AiOutlineDownload size={20} />
              <span className="menu-label">Resume</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
