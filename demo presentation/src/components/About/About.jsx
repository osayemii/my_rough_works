import './About.css'

const About = () => {
  const skills = ['React', 'Java', 'JavaScript', 'Python', 'HTML', 'CSS']

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text glass">
            <p>
              Hello! I'm <strong>Osayemi Daniel</strong>, a passionate Software Developer
              with a keen interest in UI Engineering and creating exceptional user experiences.
              I specialize in building modern, performant web applications using cutting-edge
              technologies.
            </p>
            <p>
              My journey in software development has been driven by a love for clean code,
              elegant design, and solving complex problems. I enjoy working on projects that
              challenge me to think creatively and push the boundaries of what's possible
              in web development.
            </p>
          </div>

          <div className="skills-container glass">
            <h3 className="skills-title">Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

