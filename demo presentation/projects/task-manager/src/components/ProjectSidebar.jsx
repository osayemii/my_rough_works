import { useState } from 'react'
import { useTasks } from '../context/TaskContext'
import './ProjectSidebar.css'

const ProjectSidebar = () => {
  const { state, dispatch } = useTasks()
  const [showForm, setShowForm] = useState(false)
  const [projectName, setProjectName] = useState('')

  const handleAddProject = (e) => {
    e.preventDefault()
    if (projectName.trim()) {
      const newProject = {
        id: Date.now(),
        name: projectName.trim(),
        createdAt: new Date().toISOString(),
      }
      dispatch({ type: 'ADD_PROJECT', payload: newProject })
      setProjectName('')
      setShowForm(false)
    }
  }

  return (
    <aside className="project-sidebar">
      <div className="sidebar-header">
        <h2>Projects</h2>
        <button
          className="add-project-btn"
          onClick={() => setShowForm(!showForm)}
        >
          +
        </button>
      </div>

      {showForm && (
        <form className="project-form" onSubmit={handleAddProject}>
          <input
            type="text"
            placeholder="Project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            autoFocus
          />
          <div className="form-actions">
            <button type="submit">Add</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="project-list">
        {state.projects.map((project) => (
          <div
            key={project.id}
            className={`project-item ${
              state.selectedProject === project.id ? 'active' : ''
            }`}
            onClick={() =>
              dispatch({ type: 'SELECT_PROJECT', payload: project.id })
            }
          >
            {project.name}
          </div>
        ))}
      </div>
    </aside>
  )
}

export default ProjectSidebar



