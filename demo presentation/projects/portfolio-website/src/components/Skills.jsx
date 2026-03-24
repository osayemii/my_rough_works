import './Skills.css'

const Skills = () => {
  const skills = [
    'React',
    'JavaScript',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'Node.js',
    'Git',
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills



