import { motion } from 'framer-motion'
import './About.css'

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const highlightVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -8,
      boxShadow: '0 12px 24px rgba(6, 182, 212, 0.2)',
      transition: { duration: 0.3 },
    },
  }

  const highlightsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm a front-end developer with proven expertise building beautiful, responsive, and performant user interfaces. 
              I've created engaging front-end experiences for AI-powered medical platforms, fintech solutions, and high-traffic 
              marketplaces that serve thousands of users with seamless interactions.
            </p>

            <p>
              My approach combines clean code, modern design principles, and optimal performance optimization. 
              From interactive real-time interfaces to complex state management, I deliver engaging UI solutions 
              that provide excellent user experiences across all devices and use cases.
            </p>

            <p>
              I'm passionate about creating intuitive, accessible interfaces that users love interacting with. 
              Whether it's healthcare technology, education platforms, or marketplace solutions, I focus on 
              usability, performance, and creating delightful user experiences.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            variants={highlightsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="highlight-box" variants={highlightVariants} whileHover="hover">
              <h3>🎨 UI/UX Design</h3>
              <p>Creating beautiful, intuitive user interfaces with attention to detail, accessibility, and user experience</p>
            </motion.div>
            <motion.div className="highlight-box" variants={highlightVariants} whileHover="hover">
              <h3>⚡ Performance</h3>
              <p>Building fast, responsive applications optimized for speed, smooth animations, and seamless interactions</p>
            </motion.div>
            <motion.div className="highlight-box" variants={highlightVariants} whileHover="hover">
              <h3>📱 Responsive Design</h3>
              <p>Crafting pixel-perfect interfaces that work beautifully on all devices - desktop, tablet, and mobile</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
