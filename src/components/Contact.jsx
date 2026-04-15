import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { AiOutlineDownload } from 'react-icons/ai'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/xgoppdqb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  const contactLinks = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'ogunderotamiloluwa@gmail.com',
      link: 'mailto:ogunderotamiloluwa@gmail.com',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'Ogunderotamiloluwa',
      link: 'https://github.com/Ogunderotamiloluwa',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Samson Ogundero',
      link: 'https://www.linkedin.com/in/samson-ogundero-6948b13b2',
    },
    {
      icon: FiTwitter,
      label: 'Twitter',
      value: '@samson24434',
      link: 'https://twitter.com/samson24434',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Ready to Build Something Great?</h3>
            <p>
              I'm available for frontend projects, UI/UX implementation, and building beautiful responsive interfaces. 
              Have an idea for an AI-powered app, marketplace, or platform? I specialize in crafting high-performance 
              React applications with polished user experiences. Let's discuss how I can help bring your vision to life.
            </p>

            <div className="contact-links">
              {contactLinks.map((item, idx) => {
                const Icon = item.icon
                return (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <Icon size={24} />
                    <div>
                      <p className="link-label">{item.label}</p>
                      <p className="link-value">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="contact-cta">
              <a href="/Samson_Ogundero_Resume.html" target="_blank" className="download-btn">
                <AiOutlineDownload /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.form className="contact-form" onSubmit={handleSubmit} variants={itemVariants}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {submitted && (
              <motion.p
                className="success-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
