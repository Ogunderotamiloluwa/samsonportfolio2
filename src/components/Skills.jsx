import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub,
  FaNodeJs
} from 'react-icons/fa'
import { SiNetlify, SiVercel, SiMongodb } from 'react-icons/si'
import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: FaReact, color: '#61dafb' },
        { name: 'HTML5', icon: FaHtml5, color: '#e34c26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
      ],
    },
    {
      title: 'Tools & Deployment',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#f1502f' },
        { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
        { name: 'Netlify', icon: SiNetlify, color: '#00c7b7' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
      ],
    },
    {
      title: 'Additional Skills',
      subtitle: 'Technologies I have experience working with',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#68a063' },
        { name: 'MongoDB', icon: SiMongodb, color: '#13aa52' },
      ],
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
      transition: { duration: 0.5 },
    },
  }

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
    hover: { scale: 1.1, y: -5 },
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} className="skill-category" variants={itemVariants}>
              <h3>{category.title}</h3>
              {category.subtitle && <p className="skill-subtitle">{category.subtitle}</p>}
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skillIdx}
                      className="skill-item"
                      variants={iconVariants}
                      whileHover="hover"
                      title={skill.name}
                    >
                      <Icon size={40} color={skill.color} />
                      <span>{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
