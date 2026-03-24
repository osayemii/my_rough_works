import Carousel from '../Carousel/Carousel'
import './Home.css'

const Home = () => {
  const featuredProjects = [
    {
      title: 'Todo List App',
      description:
        'A modern task management application with local storage persistence, drag-and-drop functionality, and a clean, intuitive interface built with React.',
      tech: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
      link: 'https://github.com',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Real-time weather information application that displays current conditions and forecasts. Features beautiful visualizations and accurate data from weather APIs.',
      tech: ['React', 'JavaScript', 'API Integration', 'Charts'],
      link: 'https://github.com',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A comprehensive e-commerce solution with product management, shopping cart, payment integration, and admin dashboard for managing operations.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      link: 'https://github.com',
    },
  ]

  return (
    <section id="home" className="home section">
      <div className="container">
        <div className="home-content">
          <h1 className="home-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Osayemi Daniel</span>
            <span className="role">Software Developer & UI Engineer</span>
          </h1>
          <p className="home-description">
            Crafting exceptional digital experiences through clean code,
            elegant design, and innovative solutions.
          </p>
          <div className="home-cta">
            <button
              className="cta-button primary"
              onClick={() => {
                const element = document.getElementById('projects')
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              View My Work
            </button>
            <button
              className="cta-button secondary"
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="home-carousel">
          <Carousel items={featuredProjects} autoPlay={true} interval={4000} />
        </div>
      </div>
    </section>
  )
}

export default Home

