import { useState } from 'react'
import { useTasks } from '../context/TaskContext'
import { formatDate, isOverdue } from '../utils/dateHelpers'
import PriorityBadge from './PriorityBadge'
import TaskForm from './TaskForm'
import './TaskCard.css'

const TaskCard = ({ task }) => {
  const { dispatch } = useTasks()
  const [showEdit, setShowEdit] = useState(false)

  const toggleComplete = () => {
    dispatch({
      type: 'UPDATE_TASK',
      payload: { ...task, completed: !task.completed },
    })
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch({ type: 'DELETE_TASK', payload: task.id })
    }
  }

  return (
    <>
      <div className={`task-card ${task.completed ? 'completed' : ''}`}>
        <div className="task-header">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={toggleComplete}
          />
          <h3>{task.title}</h3>
          <PriorityBadge priority={task.priority} />
        </div>
        {task.description && <p className="task-description">{task.description}</p>}
        {task.dueDate && (
          <div className={`task-due ${isOverdue(task.dueDate) ? 'overdue' : ''}`}>
            Due: {formatDate(task.dueDate)}
          </div>
        )}
        <div className="task-actions">
          <button onClick={() => setShowEdit(true)}>Edit</button>
          <button onClick={handleDelete} className="delete-btn">
            Delete
          </button>
        </div>
      </div>
      {showEdit && (
        <TaskForm task={task} onClose={() => setShowEdit(false)} />
      )}
    </>
  )
}

export default TaskCard

