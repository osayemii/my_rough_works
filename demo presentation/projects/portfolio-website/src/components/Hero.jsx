import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Osayemi Daniel</span>
            <span className="role">Software Developer & UI Engineer</span>
          </h1>
          <p className="hero-description">
            Crafting exceptional digital experiences through clean code and
            elegant design.
          </p>
          <button className="cta-button" onClick={scrollToContact}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero



