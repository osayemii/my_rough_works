import { useEffect, useRef, useState } from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  const isEven = index % 2 === 0

  return (
    <div
      ref={cardRef}
      className={`project-card ${isRevealed ? 'revealed' : ''} ${isEven ? 'even' : 'odd'}`}
    >
      <div className="project-card-content glass">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project →
        </a>
      </div>
    </div>
  )
}

export default ProjectCard

