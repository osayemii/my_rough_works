import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Todo List App',
      description: 'A modern task management application',
      tech: ['React', 'JavaScript', 'CSS'],
    },
    {
      title: 'Weather App',
      description: 'Real-time weather information application',
      tech: ['React', 'API', 'CSS'],
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Admin dashboard for e-commerce operations',
      tech: ['React', 'Charts', 'CSS'],
    },
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects



