import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  FaLinkedin, FaEnvelope, FaPhone, FaHome, FaCode, FaServer,
  FaShoppingCart, FaUsers, FaBuilding, FaTools, FaCreditCard,
  FaCloudUploadAlt, FaMobileAlt, FaDatabase, FaGithub, FaExternalLinkAlt,
  FaLaptopCode, FaRocket, FaDocker, FaAws, FaReact, FaNodeJs
} from 'react-icons/fa';
import './App.css';

// Particle configuration
const particlesOptions = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 150, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#6366f1" },
    links: {
      color: "#6366f1",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80,
    },
    opacity: { value: 0.4 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

function Header({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="logo-icon">H</span>
          <span className="logo-text">Himalaya LLC</span>
        </motion.div>

        <div className="nav-tabs">
          <motion.button
            className={`nav-tab ${activeSection === 'developer' ? 'active' : ''}`}
            onClick={() => setActiveSection('developer')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLaptopCode /> Developer Portfolio
          </motion.button>
          <motion.button
            className={`nav-tab ${activeSection === 'property' ? 'active' : ''}`}
            onClick={() => setActiveSection('property')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBuilding /> Property Management
          </motion.button>
        </div>

        <div className="header-links">
          <motion.a
            href="https://github.com/niraj411"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/gautamniraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}

function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded", container);
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={particlesOptions}
      className="particles-bg"
    />
  );
}

function Hero({ activeSection, setActiveSection }) {
  return (
    <section className="hero" id="home">
      <ParticleBackground />
      <div className="container">
        <motion.div
          className="hero-content"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="hero-badge floating" variants={fadeInUp}>
            <FaRocket className="badge-icon" />
            Full-Stack Developer & Entrepreneur
          </motion.div>

          <motion.h1 variants={fadeInUp} className="glitch" data-text="Raj Gautam">
            Raj Gautam
          </motion.h1>

          <motion.div className="hero-tagline" variants={fadeInUp}>
            <span className="typing-text">Building Digital Solutions That Scale</span>
          </motion.div>

          <motion.div className="tech-icons" variants={fadeInUp}>
            {[FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase].map((Icon, i) => (
              <motion.div
                key={i}
                className="tech-icon"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="hero-buttons" variants={fadeInUp}>
            <motion.button
              className="btn btn-primary glow"
              onClick={() => setActiveSection('developer')}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode /> View My Work
            </motion.button>
            <motion.a
              href="https://github.com/niraj411"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> GitHub Profile
            </motion.a>
          </motion.div>

          <motion.div className="scroll-indicator" variants={fadeInUp}>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WebsiteShowcase({ url, title, description, tech, github }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <motion.div
      className="showcase-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="showcase-header">
        <h3>{title}</h3>
        <div className="showcase-links">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub />
            </motion.a>
          )}
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaExternalLinkAlt />
          </motion.a>
        </div>
      </div>

      <p className="showcase-description">{description}</p>

      <div className="showcase-tech">
        {tech.map((t, i) => (
          <span key={i} className="tech-tag">{t}</span>
        ))}
      </div>

      <div className="showcase-preview">
        <motion.button
          className="preview-toggle"
          onClick={() => setShowPreview(!showPreview)}
          whileHover={{ scale: 1.02 }}
        >
          {showPreview ? 'Hide Preview' : 'Show Live Preview'}
        </motion.button>

        <AnimatePresence>
          {showPreview && (
            <motion.div
              className="iframe-container"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 400, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {!isLoaded && <div className="iframe-loader">Loading preview...</div>}
              <iframe
                src={url}
                title={title}
                onLoad={() => setIsLoaded(true)}
                sandbox="allow-scripts allow-same-origin"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline"
        whileHover={{ scale: 1.02 }}
      >
        Visit Live Site <FaExternalLinkAlt />
      </motion.a>
    </motion.div>
  );
}

function DeveloperPortfolio() {
  const projects = [
    {
      title: "iMasala - Restaurant Ordering Platform",
      url: "https://app.tandoorikitchenco.com",
      github: "https://github.com/niraj411/iMasala-v2",
      description: "Full-stack ordering platform for restaurant pickup and corporate catering delivery. Features real-time order management, secure payments, and automated deployment.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API", "Docker", "GitHub Actions", "Nginx"]
    },
    {
      title: "Restaurant E-Commerce Platform",
      url: "https://tandoorikitchenco.com",
      github: null,
      description: "E-commerce platform driving 30% increase in online revenue. Integrated SMS notifications and custom order management system.",
      tech: ["WordPress", "PHP", "Node.js", "AWS", "Twilio API"]
    }
  ];

  const services = [
    {
      icon: <FaShoppingCart size={36} />,
      title: "E-Commerce Solutions",
      description: "End-to-end online store development with payment processing, inventory management, and analytics dashboards."
    },
    {
      icon: <FaServer size={36} />,
      title: "Full-Stack Development",
      description: "Custom web applications built with modern technologies. From MVP to enterprise-scale solutions."
    },
    {
      icon: <FaCloudUploadAlt size={36} />,
      title: "Cloud & Deployment",
      description: "AWS, Docker, and Kubernetes deployment with CI/CD pipelines. Scalable infrastructure that grows with you."
    },
    {
      icon: <FaUsers size={36} />,
      title: "Consulting & Strategy",
      description: "Technical consulting for digital transformation. Sales optimization, workflow automation, and growth strategies."
    }
  ];

  const skills = [
    { category: "Languages", items: ["JavaScript", "Python", "Java", "C/C++", "PHP", "SQL", "Bash"] },
    { category: "Frontend", items: ["React", "React Native", "HTML/CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"] },
    { category: "DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Nginx"] },
    { category: "Tools", items: ["Git", "GitHub Actions", "Stripe API", "Twilio API", "Linux"] }
  ];

  return (
    <motion.section
      className="section developer-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* About */}
        <motion.div className="about-dev" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="section-header">
            <h2 className="section-title gradient-text">Developer Portfolio</h2>
            <p className="section-subtitle">
              Computer Science graduate from CU Boulder with expertise in full-stack development,
              cloud infrastructure, and building scalable applications.
            </p>
          </div>

          <div className="about-grid">
            <motion.div className="about-card" whileHover={{ scale: 1.02 }}>
              <h3><FaGithub /> Open Source</h3>
              <p>Active contributor with production-ready projects</p>
              <motion.a
                href="https://github.com/niraj411"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
                whileHover={{ x: 5 }}
              >
                View GitHub Profile <FaExternalLinkAlt />
              </motion.a>
            </motion.div>

            <motion.div className="about-card" whileHover={{ scale: 1.02 }}>
              <h3><FaRocket /> Experience</h3>
              <p>6+ years building digital solutions for real businesses</p>
            </motion.div>

            <motion.div className="about-card" whileHover={{ scale: 1.02 }}>
              <h3><FaAws /> Cloud Native</h3>
              <p>AWS, Docker, Kubernetes deployment expertise</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div className="services-section" initial="initial" whileInView="animate" viewport={{ once: true }}>
          <h3 className="subsection-title">Services & Solutions</h3>
          <div className="services-grid">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="service-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div className="skills-section" initial="initial" whileInView="animate" viewport={{ once: true }}>
          <h3 className="subsection-title">Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                className="skill-category"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h4>{skillGroup.category}</h4>
                <div className="skill-items">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="skill-item"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Showcase */}
        <motion.div className="projects-section" initial="initial" whileInView="animate" viewport={{ once: true }}>
          <h3 className="subsection-title">Featured Projects</h3>
          <div className="showcase-grid">
            {projects.map((project, idx) => (
              <WebsiteShowcase key={idx} {...project} />
            ))}
          </div>
        </motion.div>

        {/* Education & Experience */}
        <motion.div className="experience-section" initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="exp-grid">
            <motion.div className="exp-card" variants={slideInLeft}>
              <h3>Education</h3>
              <div className="exp-item">
                <h4>University of Colorado Boulder</h4>
                <p className="exp-role">Bachelor's Degree in Computer Science</p>
                <p className="exp-date">College of Engineering & Applied Science | Dec 2025</p>
                <p className="exp-details">
                  Coursework: Algorithms, Database Systems, Computer Systems,
                  Software Development, Cyber Security, AI Ethics
                </p>
              </div>
            </motion.div>

            <motion.div className="exp-card" variants={slideInRight}>
              <h3>Experience Highlights</h3>
              <div className="exp-item">
                <h4>Full-Stack Developer</h4>
                <p className="exp-role">Self-Employed | 2020 - Present</p>
                <ul>
                  <li>Built production apps serving real customers</li>
                  <li>Deployed on Linux VPS with Docker & CI/CD</li>
                  <li>Integrated payment processing & APIs</li>
                </ul>
              </div>
              <div className="exp-item">
                <h4>General Manager</h4>
                <p className="exp-role">Tandoori Kitchen | 2018 - Present</p>
                <p className="exp-highlight">#42 in Yelp's Top 100 U.S. Restaurants 2024</p>
                <p className="exp-cert">Food Production Manager Certified (Valid through Jan 2030)</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function PropertyManagement() {
  const services = [
    {
      icon: <FaBuilding size={40} />,
      title: "Tenant Management",
      description: "Comprehensive tenant screening, lease management, and communication systems."
    },
    {
      icon: <FaCreditCard size={40} />,
      title: "Online Payments",
      description: "Secure online rent collection with automated recurring billing via Stripe."
    },
    {
      icon: <FaTools size={40} />,
      title: "Maintenance",
      description: "Streamlined maintenance request tracking and vendor coordination."
    },
    {
      icon: <FaHome size={40} />,
      title: "Property Oversight",
      description: "Regular inspections, financial reporting, and transparent communication."
    }
  ];

  return (
    <motion.section
      className="section property-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Property Management</h2>
          <p className="section-subtitle">
            Professional property management services in the Denver Metro Area.
            Leveraging technology to maximize your investment returns.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="property-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="stat">
            <div className="stat-number">3+</div>
            <div>Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-number">Denver</div>
            <div>Metro Area</div>
          </div>
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div>Support</div>
          </div>
        </motion.div>

        <motion.div
          className="property-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3>Interested in our services?</h3>
          <p>Contact us to discuss your property management needs.</p>
          <motion.a
            href="mailto:niraj.gautam@colorado.edu"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope /> Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Let's Connect</h2>

          <div className="contact-grid">
            <motion.a
              href="mailto:niraj.gautam@colorado.edu"
              className="contact-card"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaEnvelope size={30} />
              <h3>Email</h3>
              <p>niraj.gautam@colorado.edu</p>
            </motion.a>

            <motion.a
              href="tel:510-388-5124"
              className="contact-card"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaPhone size={30} />
              <h3>Phone</h3>
              <p>510-388-5124</p>
            </motion.a>

            <motion.a
              href="https://github.com/niraj411"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaGithub size={30} />
              <h3>GitHub</h3>
              <p>github.com/niraj411</p>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/gautamniraj/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaLinkedin size={30} />
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/gautamniraj</p>
            </motion.a>
          </div>

          <motion.div className="languages-section" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
            <h3>Languages</h3>
            <div className="language-tags">
              {['English', 'Nepali', 'Hindi', 'Spanish'].map((lang, i) => (
                <span key={i} className="lang-tag">{lang}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-icon">H</span>
            <span>Himalaya LLC</span>
          </div>
          <div className="footer-links">
            <a href="https://github.com/niraj411" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/gautamniraj/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:niraj.gautam@colorado.edu"><FaEnvelope /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Himalaya LLC. Built with React & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('developer');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero activeSection={activeSection} setActiveSection={setActiveSection} />

      <AnimatePresence mode="wait">
        {activeSection === 'developer' ? (
          <DeveloperPortfolio key="developer" />
        ) : (
          <PropertyManagement key="property" />
        )}
      </AnimatePresence>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
