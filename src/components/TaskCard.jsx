import './TaskCard.css'
import { EFFORT_LEVELS, SKILL_LEVELS } from '../utils/goalAnalyzer'
import { RISK_LEVELS, TASK_STATES } from '../utils/expectationsTracker'

function TaskCard({ 
  task, 
  isExpanded, 
  onToggle, 
  isCompleted = false, 
  onTaskComplete = () => {}, 
  subtaskCompletion = {}, 
  onSubtaskComplete = () => {},
  riskLevel = null,
  assignee = null,
  dueDate = null,
  daysUntilDue = null,
  onEditMetadata = null,
  status = null
}) {
  // Determine if the task should appear checked
  const shouldBeChecked = isCompleted || status === TASK_STATES.COMPLETED

  const handleCheckboxClick = (e) => {
    e.stopPropagation()
    // Prevent checking if task is blocked
    if (status === TASK_STATES.BLOCKED) {
      return
    }
    onTaskComplete()
  }

  const handleEditClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (onEditMetadata) {
      onEditMetadata(task)
    }
  }

  // Count completed subtasks
  const completedSubtasksCount = Object.values(subtaskCompletion).filter(Boolean).length
  const allSubtasksCompleted = completedSubtasksCount === task.subtasks.length && task.subtasks.length > 0

  const getRiskBadgeClass = () => {
    if (!riskLevel) return ''
    switch (riskLevel.value) {
      case RISK_LEVELS.CRITICAL.value:
        return 'risk-critical'
      case RISK_LEVELS.HIGH.value:
        return 'risk-high'
      case RISK_LEVELS.MEDIUM.value:
        return 'risk-medium'
      default:
        return ''
    }
  }

  const getStatusBadgeClass = () => {
    if (!status) return 'status-not-started'
    switch (status) {
      case TASK_STATES.COMPLETED:
        return 'status-completed'
      case TASK_STATES.IN_PROGRESS:
        return 'status-in-progress'
      case TASK_STATES.BLOCKED:
        return 'status-blocked'
      case TASK_STATES.NOT_STARTED:
      default:
        return 'status-not-started'
    }
  }

  const getStatusIcon = () => {
    if (!status) return '⏸️'
    switch (status) {
      case TASK_STATES.COMPLETED:
        return '✅'
      case TASK_STATES.IN_PROGRESS:
        return '🔄'
      case TASK_STATES.BLOCKED:
        return '🚫'
      case TASK_STATES.NOT_STARTED:
      default:
        return '⏸️'
    }
  }

  const getRiskIcon = () => {
    if (!riskLevel) return null
    switch (riskLevel.value) {
      case RISK_LEVELS.CRITICAL.value:
        return '🚨'
      case RISK_LEVELS.HIGH.value:
        return '⚠️'
      case RISK_LEVELS.MEDIUM.value:
        return '⚡'
      default:
        return null
    }
  }

  const formatDueDate = (date) => {
    if (!date) return null
    const d = new Date(date)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className={`task-card ${isCompleted ? 'completed' : ''} ${getRiskBadgeClass()}`}>
      <div className="task-header">
        <div className="task-checkbox-wrapper" onClick={handleCheckboxClick}>
          <input
            type="checkbox"
            className="task-checkbox"
            checked={shouldBeChecked}
            onChange={handleCheckboxClick}
            onClick={handleCheckboxClick}
            disabled={status === TASK_STATES.BLOCKED}
            title={status === TASK_STATES.BLOCKED ? 'Task is blocked and cannot be checked' : ''}
          />
          <span className="checkmark"></span>
        </div>
        <div className="task-content" onClick={onToggle}>
          <div className="task-main-info">
            <div className="task-order-badge">{task.order}</div>
            <div className="task-title-section">
              <div className="task-title-row">
                <div className="status-badge-wrapper">
                  <span className={`task-status-badge ${getStatusBadgeClass()}`}>
                    {getStatusIcon()} {status || TASK_STATES.NOT_STARTED}
                  </span>
                </div>
                <h3 className="task-title">{task.title}</h3>
                {riskLevel && riskLevel.value >= RISK_LEVELS.MEDIUM.value && (
                  <span className="task-risk-indicator" title={riskLevel.label + ' risk'}>
                    {getRiskIcon()}
                  </span>
                )}
              </div>
              <p className="task-description">{task.description}</p>
              {(assignee || dueDate) && (
                <div className="task-expectations-meta">
                  {assignee && (
                    <span className="task-assignee">👤 {assignee}</span>
                  )}
                  {dueDate && (
                    <span className={`task-due-date ${daysUntilDue !== null && daysUntilDue < 0 ? 'overdue' : ''}`}>
                      📅 {formatDueDate(dueDate)}
                      {daysUntilDue !== null && (
                        <span className="days-remaining">
                          {daysUntilDue < 0 
                            ? ` (${Math.abs(daysUntilDue)}d overdue)`
                            : ` (${daysUntilDue}d left)`
                          }
                        </span>
                      )}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="task-metadata">
            <div className="effort-badge" style={{ backgroundColor: task.effort.color + '20', color: task.effort.color }}>
              {task.effort.label} Effort
            </div>
            <div className="skill-badge" style={{ backgroundColor: task.skillLevel.color + '20', color: task.skillLevel.color }}>
              <span className="skill-icon">{task.skillLevel.icon}</span>
              {task.skillLevel.label}
            </div>
            {riskLevel && riskLevel.value >= RISK_LEVELS.MEDIUM.value && (
              <div className="risk-badge" style={{ backgroundColor: riskLevel.color + '20', color: riskLevel.color }}>
                {riskLevel.label} Risk
              </div>
            )}
            {onEditMetadata && (
              <button 
                className="edit-metadata-button"
                onClick={handleEditClick}
                onMouseDown={(e) => e.stopPropagation()}
                title="Edit task metadata"
                type="button"
              >
                ✏️
              </button>
            )}
            <button className="expand-button">
              {isExpanded ? '▼' : '▶'}
            </button>
          </div>
        </div>
      </div>

      <div className={`task-details ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {task.dependencies.length > 0 && (
            <div className="dependencies">
              <strong>Depends on:</strong> Tasks {task.dependencies.join(', ')}
            </div>
          )}
          
          <div className="subtasks-section">
            <h4 className="subtasks-title">
              Sub-tasks ({task.subtasks.length})
              {completedSubtasksCount > 0 && (
                <span className="subtasks-progress">
                  {' '}({completedSubtasksCount} completed)
                </span>
              )}
              {allSubtasksCompleted && (
                <span className="all-completed-badge">✓ All Complete</span>
              )}
            </h4>
            <div className="subtasks-list">
              {task.subtasks.map((subtask, index) => {
                const isSubtaskCompleted = subtaskCompletion[index] || false
                return (
                <div 
                  key={index} 
                  className={`subtask-item ${isSubtaskCompleted ? 'completed' : ''}`}
                  onClick={() => status !== TASK_STATES.BLOCKED && onSubtaskComplete(index)}
                >
                  <div className="subtask-checkbox-wrapper" onClick={(e) => {
                    e.stopPropagation()
                    if (status !== TASK_STATES.BLOCKED) {
                      onSubtaskComplete(index)
                    }
                  }}>
                    <input
                      type="checkbox"
                      className="subtask-checkbox"
                      checked={isSubtaskCompleted}
                      onChange={() => status !== TASK_STATES.BLOCKED && onSubtaskComplete(index)}
                      onClick={(e) => e.stopPropagation()}
                      disabled={status === TASK_STATES.BLOCKED}
                      title={status === TASK_STATES.BLOCKED ? 'Task is blocked and subtasks cannot be checked' : ''}
                    />
                    <span className="subtask-checkmark"></span>
                  </div>
                  <div className="subtask-content">
                    <span className="subtask-number">{index + 1}</span>
                    <span className={`subtask-title ${isSubtaskCompleted ? 'completed-text' : ''}`}>{subtask.title}</span>
                  </div>
                  <div className="subtask-badges">
                    <span 
                      className="subtask-effort"
                      style={{ backgroundColor: subtask.effort.color + '20', color: subtask.effort.color }}
                    >
                      {subtask.effort.label}
                    </span>
                    <span 
                      className="subtask-skill"
                      style={{ backgroundColor: subtask.skillLevel.color + '20', color: subtask.skillLevel.color }}
                    >
                      {subtask.skillLevel.icon} {subtask.skillLevel.label}
                    </span>
                  </div>
                </div>
              )
              })}
            </div>
          </div>
        </div>
    </div>
  )
}

export default TaskCard

