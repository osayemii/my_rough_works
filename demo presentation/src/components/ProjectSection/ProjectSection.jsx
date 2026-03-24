import ProjectCard from './ProjectCard/ProjectCard'
import './ProjectSection.css'

const ProjectSection = () => {
  const projects = [
    {
      title: 'Todo List App',
      description:
        'A modern task management application built with React. Features include adding, editing, deleting tasks, local storage persistence, and a clean, intuitive interface.',
      tech: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
      link: '/projects/todo-list-app',
    },
    {
      title: 'Weather App',
      description:
        'Real-time weather information application that displays current conditions and forecasts. Integrates with weather APIs to provide accurate data for any location.',
      tech: ['React', 'JavaScript', 'API Integration', 'CSS'],
      link: '/projects/weather-app',
    },
    {
      title: 'E-Commerce Dashboard',
      description:
        'A comprehensive admin dashboard for managing e-commerce operations. Includes product management, order tracking, and analytics visualization.',
      tech: ['React', 'JavaScript', 'Charts', 'CSS'],
      link: '/projects/ecommerce-dashboard',
    },
    {
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website showcasing projects and skills. Features smooth animations, modern design, and optimized performance.',
      tech: ['React', 'JavaScript', 'CSS', 'Vite'],
      link: '/projects/portfolio-website',
    },
    {
      title: 'Task Manager',
      description:
        'Advanced task management system with project organization, priority settings, and team collaboration features. Built for productivity and efficiency.',
      tech: ['React', 'JavaScript', 'State Management', 'CSS'],
      link: '/projects/task-manager',
    },
    {
      title: 'Blog Platform',
      description:
        'A full-featured blogging platform with rich text editing, comment system, and user authentication. Designed for content creators and writers.',
      tech: ['React', 'JavaScript', 'React Router', 'CSS'],
      link: '/projects/blog-platform',
    },
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection

