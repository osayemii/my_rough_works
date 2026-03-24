import { useState } from 'react'
import { useTasks } from '../context/TaskContext'
import './TaskForm.css'

const TaskForm = ({ projectId, onClose, task = null }) => {
  const { dispatch } = useTasks()
  const [formData, setFormData] = useState({
    title: task?.title || '',
    description: task?.description || '',
    priority: task?.priority || 'medium',
    dueDate: task?.dueDate || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title.trim()) {
      if (task) {
        dispatch({
          type: 'UPDATE_TASK',
          payload: { ...task, ...formData },
        })
      } else {
        const newTask = {
          id: Date.now(),
          projectId,
          ...formData,
          completed: false,
          createdAt: new Date().toISOString(),
        }
        dispatch({ type: 'ADD_TASK', payload: newTask })
      }
      onClose()
    }
  }

  return (
    <div className="task-form-overlay" onClick={onClose}>
      <div className="task-form" onClick={(e) => e.stopPropagation()}>
        <h2>{task ? 'Edit Task' : 'New Task'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="4"
          />
          <select
            value={formData.priority}
            onChange={(e) =>
              setFormData({ ...formData, priority: e.target.value })
            }
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <input
            type="date"
            value={formData.dueDate}
            onChange={(e) =>
              setFormData({ ...formData, dueDate: e.target.value })
            }
          />
          <div className="form-actions">
            <button type="submit">{task ? 'Update' : 'Create'}</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskForm



