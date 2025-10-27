import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaGraduationCap, FaCode, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import './App.css';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Header() {
  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.h1 
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Niraj Gautam
        </motion.h1>
        <nav className="nav">
          {['About', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="hero-badge floating"
            variants={fadeInUp}
          >
            🚀 Computer Science Student & Developer
          </motion.div>
          
          <motion.h1 variants={fadeInUp}>
            Niraj Gautam
          </motion.h1>
          
          <motion.h2 variants={fadeInUp}>
            Building digital solutions that drive innovation and efficiency
          </motion.h2>
          
          <motion.p 
            className="about-text"
            variants={fadeInUp}
          >
            University of Colorado Boulder • Expected Graduation: December 2025
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            variants={fadeInUp}
          >
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="#projects" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Passionate Computer Science student at the University of Colorado Boulder with expertise 
              in full-stack development and digital transformation. I specialize in creating solutions 
              that bridge technology and business needs.
            </p>
            <p>
              With experience in both technical development and business management, I bring a unique 
              perspective to solving complex problems and driving innovation.
            </p>
            
            <div className="about-stats">
              <motion.div 
                className="stat"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">3.75</div>
                <div>GPA</div>
              </motion.div>
              <motion.div 
                className="stat"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">6+</div>
                <div>Years Experience</div>
              </motion.div>
              <motion.div 
                className="stat"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">30%</div>
                <div>Sales Growth</div>
              </motion.div>
              <motion.div 
                className="stat"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">4</div>
                <div>Languages</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="skills-preview"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="skill-category">
              <h3>Tech Stack</h3>
              <div className="skill-items">
                {['React', 'Node.js', 'Python', 'Java', 'AWS', 'MongoDB', 'Git', 'Docker'].map((skill) => (
                  <motion.span 
                    key={skill}
                    className="skill-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        
        <motion.div 
          className="experience-timeline"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div 
            className="experience-item"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="experience-header">
              <div className="company-info">
                <h3>University of Colorado Boulder</h3>
                <div className="company-location">Boulder, CO</div>
              </div>
              <div className="experience-details">
                <h4>Bachelor of Arts in Computer Science</h4>
                <div className="experience-date">Expected Dec 2025</div>
              </div>
            </div>
            <ul>
              <li><strong>GPA:</strong> 3.75</li>
              <li><strong>Relevant Coursework:</strong> Computer Systems, Database Systems, Algorithms, 
              Software Development, Object Oriented Analysis and Design, Principles of Programming 
              languages, Cyber Security & Operating Systems, Ethics of Artificial Intelligence</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "Software Development",
      icon: <FaCode />,
      skills: ["Full-Stack Development", "Agile Methodologies (Scrum)", "Test-Driven Development", "Behavior-Driven Development", "Distributed Systems"]
    },
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: ["Java", "JavaScript", "Python", "C", "C++", "HTML/CSS", "PHP", "SQL"]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaBriefcase />,
      skills: ["AWS (EC2, S3, Lambda)", "RESTful APIs", "Twilio API", "Git", "Docker", "CI/CD"]
    },
    {
      title: "Web Technologies",
      icon: <FaProjectDiagram />,
      skills: ["React", "Node.js", "WordPress", "MongoDB", "Express.js", "Vite"]
    },
    {
      title: "Tools & Platforms",
      icon: <FaBriefcase />,
      skills: ["Visual Studio Code", "Linux/Windows", "MongoDB", "WordPress", "Stripe API"]
    },
    {
      title: "Languages",
      icon: <FaGraduationCap />,
      skills: ["English (Fluent)", "Nepali (Fluent)", "Hindi (Fluent)", "Spanish (Fluent)"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <h3>{category.icon} {category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <motion.div 
          className="experience-timeline"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div 
            className="experience-item"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="experience-header">
              <div className="company-info">
                <h3>Tandoori Kitchen</h3>
                <div className="company-location">Lafayette, CO 80026</div>
              </div>
              <div className="experience-details">
                <h4>General Manager</h4>
                <div className="experience-date">Aug 2018 - Present</div>
              </div>
            </div>
            <ul>
              <li>Implemented digital tools improving order management and customer engagement</li>
              <li>Optimized operations and inventory through digital workflow implementation</li>
              <li>Led 20+ employees to achieve #42 in Yelp's Top 100 US Restaurants 2024</li>
              <li>Enhanced customer satisfaction through strategic process improvements</li>
            </ul>
          </motion.div>

          <motion.div 
            className="experience-item"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="experience-header">
              <div className="company-info">
                <h3>Himalayan Holding Properties</h3>
                <div className="company-location">Denver, CO</div>
              </div>
              <div className="experience-details">
                <h4>Property Manager</h4>
                <div className="experience-date">March 2022 - Present</div>
              </div>
            </div>
            <ul>
              <li>Implemented property management software overhauling rent tracking and communications</li>
              <li>Integrated Stripe API for online payments and auto-pay functionality</li>
              <li>Improved operational efficiency and transparency through digital transformation</li>
              <li>Streamlined maintenance scheduling and tenant communications</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div 
            className="project-card"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className="project-content">
              <h3>E-Commerce Platform</h3>
              <div className="project-date">Mar 2020 - Present</div>
              <ul>
                <li>Developed full-stack online sales platform with WordPress and AWS</li>
                <li>Integrated Twilio API for SMS notifications enhancing user engagement</li>
                <li>Implemented dynamic features using PHP, HTML, CSS, Node.js, and SQL</li>
                <li>Achieved 30% increase in online sales through platform optimization</li>
                <li>Enabled scalable hosting and streamlined business operations</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="project-card"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className="project-content">
              <h3>Property Management System</h3>
              <div className="project-date">2022 - Present</div>
              <ul>
                <li>Digital transformation of property management workflows</li>
                <li>Stripe API integration for automated payment processing</li>
                <li>Custom software solution for rent tracking and maintenance</li>
                <li>Improved operational efficiency by 40%</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="project-card"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className="project-content">
              <h3>Restaurant Management Suite</h3>
              <div className="project-date">2018 - Present</div>
              <ul>
                <li>Custom digital tools for restaurant operations optimization</li>
                <li>Inventory management and staff scheduling systems</li>
                <li>Customer engagement and order management platforms</li>
                <li>Contributed to national recognition and ranking achievement</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="about-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Ready to bring your ideas to life? Let's discuss how we can work together to create 
            something amazing.
          </p>
          
          <div className="contact-info">
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope size={24} style={{ marginBottom: '1rem', color: 'var(--primary)' }} />
              <h3>Email</h3>
              <a href="mailto:Niraj.gautam@colorado.edu">Niraj.gautam@colorado.edu</a>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone size={24} style={{ marginBottom: '1rem', color: 'var(--primary)' }} />
              <h3>Phone</h3>
              <a href="tel:510-388-5124">510-388-5124</a>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLinkedin size={24} style={{ marginBottom: '1rem', color: 'var(--primary)' }} />
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/gautamniraj/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/gautamniraj
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Niraj Gautam. Built with React & Framer Motion. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
