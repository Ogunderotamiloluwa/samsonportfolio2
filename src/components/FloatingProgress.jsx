import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './FloatingProgress.css'

export default function FloatingProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
      setIsVisible(scrollTop < 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
