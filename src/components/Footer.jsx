import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Ogunderotamiloluwa', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/samson-ogundero-6948b13b2', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/samson24434', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:ogunderotamiloluwa@gmail.com', label: 'Email' },
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Samson Ogundero</h3>
            <p>Front End Developer from Lagos, Nigeria</p>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="social-link"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Samson Ogundero. All rights reserved.</p>
          <p>Built with React, Vite, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  )
}
