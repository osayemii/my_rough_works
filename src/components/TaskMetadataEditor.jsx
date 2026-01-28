import { useState } from 'react'
import './TaskMetadataEditor.css'
import { TASK_STATES } from '../utils/expectationsTracker'

function TaskMetadataEditor({ task, taskMetadata, onSave, onClose }) {
  // Calculate default due date - use metadata first, then task dueDate, or calculate from now + 7 days
  const getDefaultDueDate = () => {
    if (taskMetadata?.dueDate) {
      return new Date(taskMetadata.dueDate).toISOString().split('T')[0]
    }
    if (task?.dueDate) {
      return new Date(task.dueDate).toISOString().split('T')[0]
    }
    // Default to 7 days from now
    const defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() + 7)
    return defaultDate.toISOString().split('T')[0]
  }

  const [assignee, setAssignee] = useState(taskMetadata?.assignee || task?.assignee || 'Unassigned')
  const [dueDate, setDueDate] = useState(getDefaultDueDate())
  const [isBlocked, setIsBlocked] = useState(taskMetadata?.status === TASK_STATES.BLOCKED)

  const handleSubmit = (e) => {
    e.preventDefault()
    const updates = {
      assignee: assignee.trim() || 'Unassigned',
      dueDate: new Date(dueDate).toISOString(),
      status: isBlocked ? TASK_STATES.BLOCKED : undefined, // Only set status if blocked
      lastUpdated: new Date().toISOString()
    }
    onSave(updates)
    onClose()
  }

  if (!task) return null

  return (
    <div className="task-metadata-editor-overlay" onClick={onClose}>
      <div className="task-metadata-editor" onClick={(e) => e.stopPropagation()}>
        <div className="editor-header">
          <h3>Edit Task: {task?.title || 'Task'}</h3>
          <button className="close-btn" onClick={onClose} type="button">×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="editor-form">
          <div className="form-group">
            <label htmlFor="assignee">Assignee</label>
            <input
              id="assignee"
              type="text"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              placeholder="Enter assignee name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={isBlocked}
                onChange={(e) => setIsBlocked(e.target.checked)}
                className="form-checkbox"
              />
              <span className="checkbox-text">Mark as Blocked</span>
            </label>
            <p className="field-hint">
              Use this when the task cannot proceed due to dependencies, issues, or external factors
            </p>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskMetadataEditor

