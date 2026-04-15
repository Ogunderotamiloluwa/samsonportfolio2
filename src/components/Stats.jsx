import { motion } from 'framer-motion';
import { FaUsers, FaCode, FaRocket, FaClock } from 'react-icons/fa';
import './Stats.css';

function Stats() {
  const stats = [
    {
      icon: FaUsers,
      number: '50K+',
      label: 'Users Across Platforms',
      description: 'Real users relying on solutions I built'
    },
    {
      icon: FaCode,
      number: '3',
      label: 'Production Apps',
      description: 'Live applications handling real traffic'
    },
    {
      icon: FaRocket,
      number: '$366M+',
      label: 'Platform Value',
      description: 'Beacon Scholar endowment supporting 1,240+ scholars'
    },
    {
      icon: FaClock,
      number: '1000+',
      label: 'Concurrent Users',
      description: 'HolidayTix peak traffic handling capacity'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
      transition: { duration: 0.3 },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.2,
      color: '#06b6d4',
      transition: { type: 'spring', stiffness: 300, damping: 10 },
    },
  }

  return (
    <section className="stats" id="stats">
      <div className="container">
        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="stat-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="stat-icon" variants={iconVariants} whileHover="hover">
                  <IconComponent />
                </motion.div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-description">{stat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
