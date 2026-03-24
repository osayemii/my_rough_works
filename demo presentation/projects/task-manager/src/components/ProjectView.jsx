import { useState } from 'react'
import { useTasks } from '../context/TaskContext'
import TaskForm from './TaskForm'
import TaskCard from './TaskCard'
import FilterBar from './FilterBar'
import './ProjectView.css'

const ProjectView = ({ projectId }) => {
  const { state, dispatch } = useTasks()
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  const project = state.projects.find((p) => p.id === projectId)
  let tasks = state.tasks.filter((t) => t.projectId === projectId)

  // Filter tasks
  if (filter === 'high') {
    tasks = tasks.filter((t) => t.priority === 'high')
  } else if (filter === 'medium') {
    tasks = tasks.filter((t) => t.priority === 'medium')
  } else if (filter === 'low') {
    tasks = tasks.filter((t) => t.priority === 'low')
  }

  // Sort tasks
  tasks.sort((a, b) => {
    if (sortBy === 'priority') {
      const priorityOrder = { high: 3, medium: 2, low: 1 }
      return priorityOrder[b.priority] - priorityOrder[a.priority]
    }
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  if (!project) return null

  return (
    <div className="project-view">
      <div className="project-header">
        <h1>{project.name}</h1>
        <button
          className="add-task-btn"
          onClick={() => setShowTaskForm(true)}
        >
          + Add Task
        </button>
      </div>

      <FilterBar filter={filter} onFilterChange={setFilter} sortBy={sortBy} onSortChange={setSortBy} />

      {showTaskForm && (
        <TaskForm
          projectId={projectId}
          onClose={() => setShowTaskForm(false)}
        />
      )}

      <div className="tasks-grid">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="empty-state">
          <p>No tasks yet. Add one to get started!</p>
        </div>
      )}
    </div>
  )
}

export default ProjectView



