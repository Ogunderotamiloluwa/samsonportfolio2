import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './FloatingProgress.css'

export default function FloatingProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = (container) => {
      let scrollTop = 0
      let docHeight = 0
      
      if (container instanceof Window) {
        scrollTop = window.scrollY
        docHeight = document.documentElement.scrollHeight - window.innerHeight
      } else {
        scrollTop = container.scrollTop
        docHeight = container.scrollHeight - container.clientHeight
      }
      
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
      
      // Hide on mobile when scrolling down
      setIsVisible(scrollTop < 500)
    }

    // Try to find the scrolling container
    const appContainer = document.querySelector('.app')
    const scrollContainer = appContainer || window
    
    const scrollListener = () => handleScroll(scrollContainer)
    
    if (scrollContainer instanceof Window) {
      window.addEventListener('scroll', scrollListener)
      return () => window.removeEventListener('scroll', scrollListener)
    } else {
      scrollContainer.addEventListener('scroll', scrollListener)
      return () => scrollContainer.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <motion.div
      className="floating-progress"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0.3, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <svg viewBox="0 0 100 100" className="progress-ring">
        <circle
          cx="50"
          cy="50"
          r="45"
          fills="none"
          className="progress-ring-background"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fills="none"
          className="progress-ring-circle"
          style={{
            strokeDashoffset: 283 - (283 * scrollProgress) / 100,
          }}
        />
      </svg>
      <div className="progress-percentage">
        {Math.round(scrollProgress)}%
      </div>
    </motion.div>
  )
}
