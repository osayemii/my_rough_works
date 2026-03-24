import { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './reactbits/ScrollStack';
import Magnet from './reactbits/Magnet';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'ALberto Watch Company',
      description: "A professional e-commerce platform for watch sales and maintenance services, focusing on user conversion.",
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      image: '🕰️',
      category: 'Web Apps',
      link: 'https://subtle-marigold-dc2d26.netlify.app/',
      githublink: 'https://github.com/osayemii/my_rough_works/tree/master/Alberto_Watch_Company'
    },
    {
      title: 'Enterprise Task Manager',
      description: 'A scalable task management solution featuring real-time state synchronization and team collaboration.',
      tech: ['React', 'Firebase', 'JavaScript'],
      image: '📋',
      category: 'Web Apps',
      link: 'https://6932014711f4976a2b95b8b2--glittering-crumble-3e633c.netlify.app/',
      githublink: 'https://github.com/osayemii/my_rough_works/tree/master/Task_Management'
    },
    {
      title: 'Library System Engine',
      description: 'A robust desktop application built with Java, implementing design patterns and JDBC for secure data handling.',
      tech: ['Java SE', 'Swing', 'JDBC'],
      image: '📚',
      category: 'Engineering',
      link: '#',
      githublink: '#'
    },
    {
      title: 'Retail Data Architect',
      description: 'Complex SQL database design for retail inventory, featuring optimized schemas and relational integrity.',
      tech: ['SQL Server', 'Database Design', 'ERD'],
      image: '💾',
      category: 'Engineering',
      link: '#',
      githublink: '#'
    },
    {
      title: 'Inventory Systems (.NET)',
      description: 'An enterprise-grade inventory management system utilizing the .NET framework for high-performance operations.',
      tech: ['C#', '.NET Core', 'ADO.NET'],
      image: '🏭',
      category: 'Engineering',
      link: '#',
      githublink: '#'
    },
    {
      title: 'Modern Business Card',
      description: 'Premium business card design for personal branding and high-end corporate identity.',
      tech: ['Photoshop', 'Branding', 'Print Design'],
      image: '📇',
      category: 'Design',
      link: '#',
      githublink: '#'
    },
    {
      title: 'Promotional Banners',
      description: 'Visual marketing assets designed for digital engagement and brand consistency.',
      tech: ['Illustrator', 'Marketing', 'Graphics'],
      image: '🎨',
      category: 'Design',
      link: '#',
      githublink: '#'
    },
    {
      title: 'Weather Architecture',
      description: 'Real-time weather tracking application leveraging REST APIs and modern UI components.',
      tech: ['React', 'API Integration', 'CSS'],
      image: '🌤️',
      category: 'Web Apps',
      link: 'https://weather-app-jade-nine-68.vercel.app/',
      githublink: 'https://github.com/osayemii/my_rough_works/tree/master/Weather-App'
    },
    {
      title: 'Real-time Chat Engine',
      description: 'A socket-based communication platform supporting multiple rooms and instant messaging.',
      tech: ['React', 'Vite', 'Socket.io'],
      image: '💬',
      category: 'Web Apps',
      link: 'https://stunning-pudding-714ebc.netlify.app/',
      githublink: 'https://github.com/osayemii/my_rough_works/tree/master/Chat-Application'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Works</h2>
        
        <ScrollStack
          scaleRange={0.1}
          opacityRange={0}
          displacementRange={20}
        >
          {projects.map((project, index) => (
            <ScrollStackItem key={`${project.title}-${index}`}>
              <div className="project-card stacked-card">
                <div className="project-image-container">
                  <div className="project-image">
                    <Magnet padding={15} magnetStrength={0.1}>
                      <div className="project-icon">{project.image}</div>
                    </Magnet>
                    <motion.div 
                      className="project-hover-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="preview-scene">
                        <motion.div 
                          className="preview-content"
                          animate={{ y: [0, -40, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="mock-ui-line wide"></div>
                          <div className="mock-ui-line medium"></div>
                          <div className="mock-ui-line short"></div>
                          <div className="mock-ui-flex">
                            <div className="mock-ui-block"></div>
                            <div className="mock-ui-block"></div>
                          </div>
                        </motion.div>
                        <div className="scanning-bar"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header-main">
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.link !== '#' ? project.link : undefined}
                      className={`project-link${project.link === '#' ? ' project-link--disabled' : ''}`}
                      target={project.link !== '#' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      aria-disabled={project.link === '#'}
                    >
                      <FiExternalLink /> View Demo
                    </a>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default Projects;
