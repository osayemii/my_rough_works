import { useState, useEffect, useMemo } from 'react'
import './ExpectationsTracker.css'
import { 
  processExpectationsTracker, 
  updateTaskMetadata,
  RISK_LEVELS,
  TASK_STATES,
  RESPONSE_TYPES
} from '../utils/expectationsTracker'

function ExpectationsTracker({ goal, breakdown, completionState, onTaskUpdate, refreshKey = 0 }) {
  const [selectedView, setSelectedView] = useState('nudges') // 'nudges' or 'risks'
  const [expandedNudgeId, setExpandedNudgeId] = useState(null)
  const [currentNudgeIndex, setCurrentNudgeIndex] = useState(0)
  const [showNudgePopup, setShowNudgePopup] = useState(false)
  const [dismissedNudges, setDismissedNudges] = useState(() => {
    const saved = localStorage.getItem(`expectations-tracker-dismissed-${goal}`)
    return saved ? JSON.parse(saved) : []
  })

  // Process tasks through expectations tracker
  const trackerData = useMemo(() => {
    if (!goal || !breakdown) return null
    return processExpectationsTracker(goal, breakdown, completionState)
  }, [goal, breakdown, completionState, refreshKey])

  // Filter out dismissed nudges
  const activeNudges = useMemo(() => {
    if (!trackerData?.nudges) return []
    return trackerData.nudges.filter(nudge => !dismissedNudges.includes(nudge.taskId))
  }, [trackerData?.nudges, dismissedNudges])

  // Count blocked tasks
  const blockedTasksCount = useMemo(() => {
    if (!trackerData?.tasks) return 0
    return trackerData.tasks.filter(task => task.status === TASK_STATES.BLOCKED).length
  }, [trackerData?.tasks])

  // Auto-switch view if current view becomes empty
  useEffect(() => {
    if (selectedView === 'blocked' && blockedTasksCount === 0) {
      setSelectedView('nudges')
    }
  }, [selectedView, blockedTasksCount])

  // Save dismissed nudges
  useEffect(() => {
    if (goal) {
      localStorage.setItem(`expectations-tracker-dismissed-${goal}`, JSON.stringify(dismissedNudges))
    }
  }, [dismissedNudges, goal])

  const handleDismissNudge = (taskId) => {
    setDismissedNudges(prev => [...prev, taskId])
  }

  const handleMarkAsRead = (taskId) => {
    // Update task's lastUpdated to acknowledge the nudge
    updateTaskMetadata(goal, taskId, {})
    if (onTaskUpdate) {
      onTaskUpdate()
    }
    // Move to next nudge or close if no more
    if (currentNudgeIndex < activeNudges.length - 1) {
      setCurrentNudgeIndex(prev => prev + 1)
    } else {
      setShowNudgePopup(false)
      setCurrentNudgeIndex(0)
    }
  }

  const handleViewAllNudges = () => {
    if (activeNudges.length > 0) {
      setShowNudgePopup(true)
      setCurrentNudgeIndex(0)
    }
  }

  const handleNextNudge = () => {
    if (currentNudgeIndex < activeNudges.length - 1) {
      setCurrentNudgeIndex(prev => prev + 1)
    }
  }

  const handlePrevNudge = () => {
    if (currentNudgeIndex > 0) {
      setCurrentNudgeIndex(prev => prev - 1)
    }
  }

  const handleClosePopup = () => {
    setShowNudgePopup(false)
    setCurrentNudgeIndex(0)
  }

  const getRiskBadgeClass = (riskLevel) => {
    if (!riskLevel) return 'risk-badge-low'
    switch (riskLevel.value) {
      case RISK_LEVELS.CRITICAL.value:
        return 'risk-badge-critical'
      case RISK_LEVELS.HIGH.value:
        return 'risk-badge-high'
      case RISK_LEVELS.MEDIUM.value:
        return 'risk-badge-medium'
      default:
        return 'risk-badge-low'
    }
  }

  const getUrgencyIcon = (urgency) => {
    switch (urgency) {
      case 'critical':
        return '🚨'
      case 'high':
        return '⚠️'
      case 'medium':
        return '⚡'
      default:
        return '💡'
    }
  }

  if (!trackerData) return null

  const { tasks, nudges, summary } = trackerData

  return (
    <div className="expectations-tracker">
      <div className="tracker-header">
        <h3 className="tracker-title">Expectations Tracker</h3>
        <div className="tracker-summary">
          <span className="summary-item">
            <span className="summary-label">At Risk:</span>
            <span className={`summary-value ${summary.atRiskTasks > 0 ? 'has-risk' : ''}`}>
              {summary.atRiskTasks}
            </span>
          </span>
          {blockedTasksCount > 0 && (
            <span className="summary-item blocked">
              <span className="summary-label">Blocked:</span>
              <span className="summary-value">{blockedTasksCount}</span>
            </span>
          )}
          {summary.criticalTasks > 0 && (
            <span className="summary-item critical">
              <span className="summary-label">Critical:</span>
              <span className="summary-value">{summary.criticalTasks}</span>
            </span>
          )}
          <span className="summary-item">
            <span className="summary-label">Nudges:</span>
            <span className={`summary-value ${activeNudges.length > 0 ? 'has-nudges' : ''}`}>
              {activeNudges.length}
            </span>
          </span>
        </div>
      </div>

      <div className="tracker-view-toggle">
        <button
          className={`toggle-btn ${selectedView === 'nudges' ? 'active' : ''}`}
          onClick={() => setSelectedView('nudges')}
        >
          Nudges ({activeNudges.length})
        </button>
        {blockedTasksCount > 0 && (
          <button
            className={`toggle-btn ${selectedView === 'blocked' ? 'active' : ''}`}
            onClick={() => setSelectedView('blocked')}
          >
            Blocked ({blockedTasksCount})
          </button>
        )}
        <button
          className={`toggle-btn ${selectedView === 'risks' ? 'active' : ''}`}
          onClick={() => setSelectedView('risks')}
        >
          Risk Assessment
        </button>
      </div>

      {selectedView === 'nudges' && (
        <div className="nudges-container">
          {activeNudges.length === 0 ? (
            <div className="no-nudges">
              <p>🎉 All tasks are on track! No nudges needed.</p>
            </div>
          ) : (
            <div className="nudges-summary">
              <div className="nudges-info">
                <p>You have {activeNudges.length} nudge{activeNudges.length > 1 ? 's' : ''} to review</p>
                <button 
                  className="view-nudges-btn"
                  onClick={handleViewAllNudges}
                >
                  View All Nudges
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Nudge Popup Modal */}
      {showNudgePopup && activeNudges.length > 0 && (
        <div className="nudge-popup-overlay" onClick={handleClosePopup}>
          <div className="nudge-popup" onClick={(e) => e.stopPropagation()}>
            {currentNudgeIndex < activeNudges.length && (
              <>
                <div className="nudge-popup-header">
                  <div className="nudge-popup-nav">
                    <button 
                      className="nav-btn prev-btn"
                      onClick={handlePrevNudge}
                      disabled={currentNudgeIndex === 0}
                    >
                      ←
                    </button>
                    <span className="nudge-counter">
                      {currentNudgeIndex + 1} / {activeNudges.length}
                    </span>
                    <button 
                      className="nav-btn next-btn"
                      onClick={handleNextNudge}
                      disabled={currentNudgeIndex === activeNudges.length - 1}
                    >
                      →
                    </button>
                  </div>
                  <button className="close-popup-btn" onClick={handleClosePopup}>
                    ×
                  </button>
                </div>
                
                <div className={`nudge-popup-content nudge-${activeNudges[currentNudgeIndex].urgency}`}>
                  <div className="nudge-header">
                    <div className="nudge-icon">{getUrgencyIcon(activeNudges[currentNudgeIndex].urgency)}</div>
                    <div className="nudge-content">
                      <div className="nudge-title-section">
                        <h4 className="nudge-task-title">{activeNudges[currentNudgeIndex].taskTitle}</h4>
                        <span className={`risk-badge ${getRiskBadgeClass(activeNudges[currentNudgeIndex].riskLevel)}`}>
                          {activeNudges[currentNudgeIndex].riskLevel?.label || 'Low'}
                        </span>
                      </div>
                      <p className="nudge-message">{activeNudges[currentNudgeIndex].message}</p>
                      <div className="nudge-meta">
                        <span className="nudge-assignee">👤 {activeNudges[currentNudgeIndex].assignee}</span>
                        {activeNudges[currentNudgeIndex].daysUntilDue !== undefined && (
                          <span className={`nudge-due ${activeNudges[currentNudgeIndex].daysUntilDue < 0 ? 'overdue' : ''}`}>
                            📅 {activeNudges[currentNudgeIndex].daysUntilDue < 0 
                              ? `${Math.abs(activeNudges[currentNudgeIndex].daysUntilDue)} days overdue`
                              : `${activeNudges[currentNudgeIndex].daysUntilDue} days remaining`
                            }
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="nudge-actions">
                    <button 
                      className="nudge-action-btn mark-read"
                      onClick={() => handleMarkAsRead(activeNudges[currentNudgeIndex].taskId)}
                    >
                      Mark as Read
                    </button>
                    <button 
                      className="nudge-action-btn dismiss"
                      onClick={() => handleDismissNudge(activeNudges[currentNudgeIndex].taskId)}
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {selectedView === 'blocked' && (
        <div className="blocked-container">
          <div className="blocked-list">
            {tasks.filter(task => task.status === TASK_STATES.BLOCKED).map((task) => (
              <div key={task.id} className="blocked-task-card">
                <div className="blocked-header">
                  <div className="blocked-icon">🚫</div>
                  <div className="blocked-content">
                    <h4 className="blocked-task-title">{task.title}</h4>
                    <div className="blocked-meta">
                      <span className="blocked-assignee">👤 {task.assignee}</span>
                      {task.dueDate && (
                        <span className="blocked-due">
                          📅 Due: {new Date(task.dueDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    <p className="blocked-description">
                      This task is blocked and cannot proceed. Consider unblocking it or addressing the blocking issues.
                    </p>
                  </div>
                </div>
                <div className="blocked-actions">
                  <button 
                    className="blocked-action-btn unblock"
                    onClick={() => {
                      updateTaskMetadata(goal, task.id, { status: undefined, lastUpdated: new Date().toISOString() })
                      if (onTaskUpdate) onTaskUpdate()
                    }}
                  >
                    Unblock Task
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedView === 'risks' && (
        <div className="risks-container">
          <div className="risks-list">
            {tasks.map((task) => {
              const riskLevel = task.riskLevel || RISK_LEVELS.LOW
              const hasRisk = riskLevel.value >= RISK_LEVELS.MEDIUM.value
              
              if (!hasRisk && task.status === TASK_STATES.COMPLETED) {
                return null // Don't show completed tasks without risk
              }

              return (
                <div 
                  key={task.id} 
                  className={`risk-item ${hasRisk ? 'has-risk' : ''}`}
                >
                  <div className="risk-item-header">
                    <div className="risk-item-info">
                      <h4 className="risk-task-title">{task.title}</h4>
                      <div className="risk-item-meta">
                        <span className="risk-assignee">👤 {task.assignee}</span>
                        <span className="risk-status">Status: {task.status}</span>
                      </div>
                    </div>
                    <div className={`risk-badge ${getRiskBadgeClass(riskLevel)}`}>
                      {riskLevel.label}
                    </div>
                  </div>
                  {task.riskReason && (
                    <div className="risk-reason">
                      <span className="risk-reason-label">Reason:</span>
                      <span className="risk-reason-text">{task.riskReason}</span>
                    </div>
                  )}
                  <div className="risk-details">
                    {task.daysUntilDue !== undefined && (
                      <span className={`risk-detail ${task.daysUntilDue < 0 ? 'overdue' : ''}`}>
                        📅 {task.daysUntilDue < 0 
                          ? `${Math.abs(task.daysUntilDue)} days overdue`
                          : `${task.daysUntilDue} days until due`
                        }
                      </span>
                    )}
                    {task.daysSinceUpdate !== undefined && task.daysSinceUpdate > 0 && (
                      <span className="risk-detail">
                        ⏱️ No updates for {task.daysSinceUpdate} day{task.daysSinceUpdate > 1 ? 's' : ''}
                      </span>
                    )}
                    <span className="risk-detail">
                      📋 Due: {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExpectationsTracker

