import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './FloatingProgress.css'

export default function FloatingProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const appContainer = document.querySelector('.app')
      let scrollTop = 0
      let docHeight = 0
      
      if (appContainer) {
        // If .app is the scrolling container
        scrollTop = appContainer.scrollTop
        docHeight = appContainer.scrollHeight - appContainer.clientHeight
      } else {
        // Fallback to window scroll
        scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
        docHeight = document.documentElement.scrollHeight - window.innerHeight
      }
      
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
      
      // Hide on mobile when scrolling down
      setIsVisible(scrollTop < 500)
    }

    const appContainer = document.querySelector('.app')
    
    // Listen to scroll on both window and app container
    window.addEventListener('scroll', handleScroll, { passive: true })
    if (appContainer) {
      appContainer.addEventListener('scroll', handleScroll, { passive: true })
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (appContainer) {
        appContainer.removeEventListener('scroll', handleScroll)
      }
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
