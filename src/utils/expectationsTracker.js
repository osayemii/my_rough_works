// Expectations Tracker System Rules and Utilities

// ============================================================================
// STEP 1: SYSTEM RULES
// ============================================================================

// Mandatory task fields
export const TASK_FIELDS = {
  TITLE: 'title',
  ASSIGNEE: 'assignee',
  STATUS: 'status',
  DUE_DATE: 'dueDate',
  LAST_UPDATED: 'lastUpdated'
}

// Task states
export const TASK_STATES = {
  NOT_STARTED: 'Not Started',
  IN_PROGRESS: 'In Progress',
  BLOCKED: 'Blocked',
  COMPLETED: 'Completed'
}

// Risk levels
export const RISK_LEVELS = {
  LOW: { 
    label: 'Low', 
    value: 1, 
    color: '#4ade80',
    threshold: 0.3 // 30% of time remaining
  },
  MEDIUM: { 
    label: 'Medium', 
    value: 2, 
    color: '#fbbf24',
    threshold: 0.5 // 50% of time remaining
  },
  HIGH: { 
    label: 'High', 
    value: 3, 
    color: '#f87171',
    threshold: 0.7 // 70% of time remaining
  },
  CRITICAL: { 
    label: 'Critical', 
    value: 4, 
    color: '#ef4444',
    threshold: 1.0 // Overdue or 100%+ of time elapsed
  }
}

// Response types mapped to risk levels
export const RESPONSE_TYPES = {
  SOFT_NUDGE: 'soft_nudge',      // Low risk
  FIRM_NUDGE: 'firm_nudge',      // Medium risk
  FIRM_NUDGE_HIGH: 'firm_nudge_high', // High risk
  ESCALATION: 'escalation'       // Critical risk
}

// Risk level to response type mapping
export const RISK_RESPONSE_MAP = {
  [RISK_LEVELS.LOW.value]: RESPONSE_TYPES.SOFT_NUDGE,
  [RISK_LEVELS.MEDIUM.value]: RESPONSE_TYPES.FIRM_NUDGE,
  [RISK_LEVELS.HIGH.value]: RESPONSE_TYPES.FIRM_NUDGE_HIGH,
  [RISK_LEVELS.CRITICAL.value]: RESPONSE_TYPES.ESCALATION
}

// Inactivity thresholds (in days)
export const INACTIVITY_THRESHOLDS = {
  WARNING: 3,    // Soft nudge after 3 days
  CONCERN: 7,    // Firm nudge after 7 days
  CRITICAL: 14   // Escalation after 14 days
}

// ============================================================================
// STEP 2: TASK NORMALIZATION
// ============================================================================

/**
 * Normalizes a task from the goal breakdown system to include all mandatory fields
 * @param {Object} task - Task from breakdown system
 * @param {Object} taskMetadata - Additional metadata (assignee, dueDate, etc.)
 * @param {Object} completionState - Current completion state
 * @param {Number} estimatedWeeks - Estimated weeks for the goal
 * @param {Number} totalTasks - Total number of tasks
 * @returns {Object} Normalized task with all mandatory fields
 */
export function normalizeTask(task, taskMetadata = {}, completionState = {}, estimatedWeeks = 8, totalTasks = 5, allTasks = []) {
  const isCompleted = completionState[task.id]?.completed || false
  
  // Calculate default due date based on task order, dependencies, and estimated timeline
  const defaultDueDate = calculateDefaultDueDate(task, allTasks, estimatedWeeks, totalTasks)
  
  // Determine status based on completion state - automatic calculation with blocked override
  let status = TASK_STATES.NOT_STARTED
  
  // Check if task is manually blocked (takes precedence)
  if (taskMetadata.status === TASK_STATES.BLOCKED) {
    status = TASK_STATES.BLOCKED
  } else {
    // Check subtasks completion
    if (completionState[task.id]?.subtasks && task.subtasks.length > 0) {
      const completedSubtasks = Object.values(completionState[task.id].subtasks).filter(Boolean).length
      const totalSubtasks = task.subtasks.length
      
      if (completedSubtasks === totalSubtasks) {
        // All subtasks are completed
        status = TASK_STATES.COMPLETED
      } else if (completedSubtasks > 0) {
        // Some subtasks are completed
        status = TASK_STATES.IN_PROGRESS
      }
      // If completedSubtasks === 0, status remains NOT_STARTED
    }
    
    // Also check if main task checkbox is explicitly checked (this takes precedence over subtasks)
    if (isCompleted) {
      status = TASK_STATES.COMPLETED
    }
  }
  
  // Get last updated timestamp
  const lastUpdated = taskMetadata.lastUpdated || taskMetadata.createdAt || new Date().toISOString()
  
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    assignee: taskMetadata.assignee || 'Unassigned',
    status: status,
    dueDate: taskMetadata.dueDate || defaultDueDate,
    lastUpdated: lastUpdated,
    // Preserve original task data
    order: task.order,
    effort: task.effort,
    skillLevel: task.skillLevel,
    dependencies: task.dependencies,
    subtasks: task.subtasks,
    // Risk assessment will be added by risk detection engine
    riskLevel: null,
    riskReason: null,
    responseType: null
  }
}

/**
 * Calculates a default due date for a task based on its order, dependencies, and estimated timeline
 * @param {Object} task - Task object
 * @param {Array} allTasks - All tasks in the breakdown for dependency resolution
 * @param {Number} estimatedWeeks - Total estimated weeks for the goal
 * @param {Number} totalTasks - Total number of tasks
 * @returns {String} ISO date string
 */
function calculateDefaultDueDate(task, allTasks = [], estimatedWeeks = 8, totalTasks = 5) {
  const now = new Date()
  
  // Base timeline distribution
  const weeksPerTask = estimatedWeeks / totalTasks
  let weeksFromNow = task.order * weeksPerTask
  
  // If task has dependencies, ensure due date is after all dependencies
  if (task.dependencies && task.dependencies.length > 0 && allTasks.length > 0) {
    let maxDependencyWeeks = 0
    
    task.dependencies.forEach(depId => {
      const dependencyTask = allTasks.find(t => t.id === depId)
      if (dependencyTask) {
        // Calculate dependency's due date
        const depWeeksFromNow = dependencyTask.order * weeksPerTask
        // Add buffer time (1 week) for dependency completion
        const depWithBuffer = depWeeksFromNow + 1
        maxDependencyWeeks = Math.max(maxDependencyWeeks, depWithBuffer)
      }
    })
    
    // Use the later of: base calculation or dependency completion
    weeksFromNow = Math.max(weeksFromNow, maxDependencyWeeks)
  }
  
  const dueDate = new Date(now)
  dueDate.setDate(dueDate.getDate() + (weeksFromNow * 7))
  return dueDate.toISOString()
}

/**
 * Normalizes all tasks from a breakdown
 * @param {Object} breakdown - Goal breakdown object
 * @param {Object} taskMetadataMap - Map of taskId to metadata
 * @param {Object} completionState - Completion state
 * @returns {Array} Array of normalized tasks
 */
export function normalizeAllTasks(breakdown, taskMetadataMap = {}, completionState = {}) {
  if (!breakdown || !breakdown.tasks) return []
  
  const estimatedWeeks = breakdown.summary?.estimatedWeeks || 8
  const totalTasks = breakdown.tasks.length
  
  return breakdown.tasks.map(task => {
    const metadata = taskMetadataMap[task.id] || {}
    return normalizeTask(task, metadata, completionState, estimatedWeeks, totalTasks, breakdown.tasks)
  })
}

// ============================================================================
// STEP 3: RISK DETECTION ENGINE
// ============================================================================

/**
 * Evaluates a task to determine its risk level
 * @param {Object} normalizedTask - Normalized task object
 * @returns {Object} Risk assessment with level, reason, and response type
 */
export function assessTaskRisk(normalizedTask) {
  const now = new Date()
  const dueDate = new Date(normalizedTask.dueDate)
  const lastUpdated = new Date(normalizedTask.lastUpdated)
  
  // Skip risk assessment for completed tasks
  if (normalizedTask.status === TASK_STATES.COMPLETED) {
    return {
      riskLevel: RISK_LEVELS.LOW,
      riskReason: 'Task is completed',
      responseType: null,
      riskScore: 0
    }
  }
  
  // Skip risk assessment for blocked tasks (they have different handling)
  if (normalizedTask.status === TASK_STATES.BLOCKED) {
    return {
      riskLevel: RISK_LEVELS.MEDIUM,
      riskReason: 'Task is blocked',
      responseType: RESPONSE_TYPES.FIRM_NUDGE,
      riskScore: RISK_LEVELS.MEDIUM.value
    }
  }
  
  const daysUntilDue = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24))
  const daysSinceUpdate = Math.ceil((now - lastUpdated) / (1000 * 60 * 60 * 24))
  const totalDays = Math.ceil((dueDate - lastUpdated) / (1000 * 60 * 60 * 24))
  
  let riskLevel = RISK_LEVELS.LOW
  let riskReason = ''
  let riskScore = 0
  
  // Check if overdue
  if (daysUntilDue < 0) {
    const daysOverdue = Math.abs(daysUntilDue)
    if (daysOverdue >= 7) {
      riskLevel = RISK_LEVELS.CRITICAL
      riskReason = `Task is ${daysOverdue} days overdue`
      riskScore = RISK_LEVELS.CRITICAL.value + (daysOverdue / 7) // Escalate with time
    } else {
      riskLevel = RISK_LEVELS.HIGH
      riskReason = `Task is ${daysOverdue} day${daysOverdue > 1 ? 's' : ''} overdue`
      riskScore = RISK_LEVELS.HIGH.value
    }
  }
  // Check time remaining vs inactivity
  else if (totalDays > 0) {
    const timeElapsed = (now - lastUpdated) / (1000 * 60 * 60 * 24)
    const timeRemaining = daysUntilDue
    const progressRatio = timeElapsed / totalDays
    
    // High inactivity
    if (daysSinceUpdate >= INACTIVITY_THRESHOLDS.CRITICAL) {
      riskLevel = RISK_LEVELS.CRITICAL
      riskReason = `No updates for ${daysSinceUpdate} days`
      riskScore = RISK_LEVELS.CRITICAL.value
    }
    // Medium inactivity
    else if (daysSinceUpdate >= INACTIVITY_THRESHOLDS.CONCERN) {
      if (progressRatio >= RISK_LEVELS.HIGH.threshold) {
        riskLevel = RISK_LEVELS.HIGH
        riskReason = `No updates for ${daysSinceUpdate} days and ${Math.round(progressRatio * 100)}% of time elapsed`
        riskScore = RISK_LEVELS.HIGH.value
      } else {
        riskLevel = RISK_LEVELS.MEDIUM
        riskReason = `No updates for ${daysSinceUpdate} days`
        riskScore = RISK_LEVELS.MEDIUM.value
      }
    }
    // Low inactivity
    else if (daysSinceUpdate >= INACTIVITY_THRESHOLDS.WARNING) {
      if (progressRatio >= RISK_LEVELS.MEDIUM.threshold) {
        riskLevel = RISK_LEVELS.MEDIUM
        riskReason = `No updates for ${daysSinceUpdate} days and approaching deadline`
        riskScore = RISK_LEVELS.MEDIUM.value
      } else {
        riskLevel = RISK_LEVELS.LOW
        riskReason = `No updates for ${daysSinceUpdate} days`
        riskScore = RISK_LEVELS.LOW.value
      }
    }
    // Check time remaining ratio
    else if (progressRatio >= RISK_LEVELS.HIGH.threshold && timeRemaining < 3) {
      riskLevel = RISK_LEVELS.HIGH
      riskReason = `Only ${Math.round(timeRemaining)} day${timeRemaining > 1 ? 's' : ''} remaining`
      riskScore = RISK_LEVELS.HIGH.value
    }
    else if (progressRatio >= RISK_LEVELS.MEDIUM.threshold) {
      riskLevel = RISK_LEVELS.MEDIUM
      riskReason = `${Math.round(progressRatio * 100)}% of time elapsed with ${Math.round(timeRemaining)} day${timeRemaining > 1 ? 's' : ''} remaining`
      riskScore = RISK_LEVELS.MEDIUM.value
    }
    else if (progressRatio >= RISK_LEVELS.LOW.threshold) {
      riskLevel = RISK_LEVELS.LOW
      riskReason = `${Math.round(progressRatio * 100)}% of time elapsed`
      riskScore = RISK_LEVELS.LOW.value
    }
  }
  
  // Determine response type based on risk level
  const responseType = RISK_RESPONSE_MAP[riskLevel.value] || null
  
  return {
    riskLevel,
    riskReason,
    responseType,
    riskScore,
    daysUntilDue,
    daysSinceUpdate
  }
}

/**
 * Assesses risk for all tasks
 * @param {Array} normalizedTasks - Array of normalized tasks
 * @returns {Array} Tasks with risk assessments added
 */
export function assessAllTasksRisk(normalizedTasks) {
  return normalizedTasks.map(task => {
    const riskAssessment = assessTaskRisk(task)
    return {
      ...task,
      riskLevel: riskAssessment.riskLevel,
      riskReason: riskAssessment.riskReason,
      responseType: riskAssessment.responseType,
      riskScore: riskAssessment.riskScore,
      daysUntilDue: riskAssessment.daysUntilDue,
      daysSinceUpdate: riskAssessment.daysSinceUpdate
    }
  })
}

// ============================================================================
// STEP 4: NUDGE GENERATOR
// ============================================================================

/**
 * Generates a nudge message for a task based on its risk assessment
 * @param {Object} task - Task with risk assessment
 * @returns {Object} Nudge object with message, type, and metadata
 */
export function generateNudge(task) {
  if (!task.responseType || task.status === TASK_STATES.COMPLETED) {
    return null
  }
  
  // Check if task was updated recently (within last 24 hours) - suppress nudge if so
  const now = new Date()
  const lastUpdated = new Date(task.lastUpdated)
  const hoursSinceUpdate = (now - lastUpdated) / (1000 * 60 * 60)
  
  if (hoursSinceUpdate < 24) {
    return null // Don't show nudge if updated within last 24 hours
  }
  
  const assignee = task.assignee || 'Team member'
  const taskTitle = task.title
  const dueDate = new Date(task.dueDate)
  const daysUntilDue = task.daysUntilDue || Math.ceil((dueDate - new Date()) / (1000 * 60 * 60 * 24))
  const daysSinceUpdate = task.daysSinceUpdate || 0
  
  let message = ''
  let tone = 'friendly'
  let urgency = 'low'
  
  switch (task.responseType) {
    case RESPONSE_TYPES.SOFT_NUDGE:
      tone = 'friendly'
      urgency = 'low'
      if (daysSinceUpdate > 0) {
        message = `Hi ${assignee}, just a friendly reminder that "${taskTitle}" hasn't been updated in ${daysSinceUpdate} day${daysSinceUpdate > 1 ? 's' : ''}. There's still ${daysUntilDue} day${daysUntilDue > 1 ? 's' : ''} until the due date.`
      } else {
        message = `Hi ${assignee}, just checking in on "${taskTitle}". It's due in ${daysUntilDue} day${daysUntilDue > 1 ? 's' : ''}.`
      }
      break
      
    case RESPONSE_TYPES.FIRM_NUDGE:
      tone = 'professional'
      urgency = 'medium'
      if (daysUntilDue < 0) {
        message = `${assignee}, "${taskTitle}" is overdue by ${Math.abs(daysUntilDue)} day${Math.abs(daysUntilDue) > 1 ? 's' : ''}. Please provide an update on the current status and expected completion date.`
      } else if (daysSinceUpdate > 0) {
        message = `${assignee}, "${taskTitle}" hasn't been updated in ${daysSinceUpdate} day${daysSinceUpdate > 1 ? 's' : ''} and is due in ${daysUntilDue} day${daysUntilDue > 1 ? 's' : ''}. Please update the task status or let us know if you need assistance.`
      } else {
        message = `${assignee}, "${taskTitle}" is approaching its deadline (${daysUntilDue} day${daysUntilDue > 1 ? 's' : ''} remaining). Please ensure progress is on track.`
      }
      break
      
    case RESPONSE_TYPES.FIRM_NUDGE_HIGH:
      tone = 'urgent'
      urgency = 'high'
      if (daysUntilDue < 0) {
        message = `URGENT: ${assignee}, "${taskTitle}" is ${Math.abs(daysUntilDue)} day${Math.abs(daysUntilDue) > 1 ? 's' : ''} overdue. Immediate action required. Please provide a status update and revised completion timeline.`
      } else {
        message = `URGENT: ${assignee}, "${taskTitle}" is due in ${daysUntilDue} day${daysUntilDue > 1 ? 's' : ''} and hasn't been updated in ${daysSinceUpdate} day${daysSinceUpdate > 1 ? 's' : ''}. This requires immediate attention.`
      }
      break
      
    case RESPONSE_TYPES.ESCALATION:
      tone = 'critical'
      urgency = 'critical'
      const daysOverdue = Math.abs(daysUntilDue)
      message = `ESCALATION: "${taskTitle}" assigned to ${assignee} is ${daysOverdue} day${daysOverdue > 1 ? 's' : ''} overdue with no recent updates. This task requires immediate management attention. Team lead has been notified.`
      break
      
    default:
      return null
  }
  
  return {
    taskId: task.id,
    taskTitle,
    assignee,
    message,
    responseType: task.responseType,
    riskLevel: task.riskLevel,
    tone,
    urgency,
    generatedAt: new Date().toISOString(),
    dueDate: task.dueDate,
    daysUntilDue,
    daysSinceUpdate
  }
}

/**
 * Generates nudges for all tasks that need them
 * Only shows nudges when there are 7 days or less until deadline
 * @param {Array} tasksWithRisk - Tasks with risk assessments
 * @returns {Array} Array of nudge objects
 */
export function generateAllNudges(tasksWithRisk) {
  return tasksWithRisk
    .map(task => generateNudge(task))
    .filter(nudge => {
      // Only show nudges when daysUntilDue <= 7 (including overdue tasks)
      if (nudge === null) return false
      return nudge.daysUntilDue !== undefined && nudge.daysUntilDue <= 7
    })
    .sort((a, b) => {
      // Sort by urgency: critical > high > medium > low
      const urgencyOrder = { critical: 4, high: 3, medium: 2, low: 1 }
      return urgencyOrder[b.urgency] - urgencyOrder[a.urgency]
    })
}

// ============================================================================
// STEP 5: INTEGRATION HELPERS
// ============================================================================

/**
 * Loads task metadata from localStorage
 * @param {String} goal - Goal identifier
 * @returns {Object} Map of taskId to metadata
 */
export function loadTaskMetadata(goal) {
  if (!goal) return {}
  const key = `expectations-tracker-metadata-${goal}`
  const saved = localStorage.getItem(key)
  return saved ? JSON.parse(saved) : {}
}

/**
 * Saves task metadata to localStorage
 * @param {String} goal - Goal identifier
 * @param {Object} metadataMap - Map of taskId to metadata
 */
export function saveTaskMetadata(goal, metadataMap) {
  if (!goal) return
  const key = `expectations-tracker-metadata-${goal}`
  localStorage.setItem(key, JSON.stringify(metadataMap))
}

/**
 * Updates a task's metadata
 * @param {String} goal - Goal identifier
 * @param {Number} taskId - Task ID
 * @param {Object} updates - Metadata updates (assignee, dueDate, status, etc.)
 */
export function updateTaskMetadata(goal, taskId, updates) {
  const metadata = loadTaskMetadata(goal)
  metadata[taskId] = {
    ...metadata[taskId],
    ...updates,
    lastUpdated: new Date().toISOString()
  }
  saveTaskMetadata(goal, metadata)
  return metadata
}

/**
 * Main function to process all tasks through the expectations tracker
 * @param {String} goal - Goal identifier
 * @param {Object} breakdown - Goal breakdown object
 * @param {Object} completionState - Completion state
 * @returns {Object} Processed data with normalized tasks, risk assessments, and nudges
 */
export function processExpectationsTracker(goal, breakdown, completionState = {}) {
  // Load existing metadata
  const taskMetadata = loadTaskMetadata(goal)
  
  // Normalize tasks
  const normalizedTasks = normalizeAllTasks(breakdown, taskMetadata, completionState)
  
  // Assess risk
  const tasksWithRisk = assessAllTasksRisk(normalizedTasks)
  
  // Generate nudges
  const nudges = generateAllNudges(tasksWithRisk)
  
  return {
    tasks: tasksWithRisk,
    nudges,
    summary: {
      totalTasks: tasksWithRisk.length,
      atRiskTasks: tasksWithRisk.filter(t => t.riskLevel.value >= RISK_LEVELS.MEDIUM.value).length,
      criticalTasks: tasksWithRisk.filter(t => t.riskLevel.value === RISK_LEVELS.CRITICAL.value).length,
      totalNudges: nudges.length
    }
  }
}

