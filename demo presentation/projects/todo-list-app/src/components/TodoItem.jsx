import { useState } from 'react'
import './TodoItem.css'

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (isEditing && editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText)
    }
    setIsEditing(!isEditing)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {isEditing ? (
          <input
            type="text"
            className="todo-edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span
            className="todo-text"
            onDoubleClick={handleEdit}
            title="Double-click to edit"
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="todo-actions">
        {!isEditing && (
          <>
            <button
              className="todo-action-btn edit-btn"
              onClick={handleEdit}
              aria-label="Edit task"
            >
              ✏️
            </button>
            <button
              className="todo-action-btn delete-btn"
              onClick={() => onDelete(todo.id)}
              aria-label="Delete task"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </li>
  )
}

export default TodoItem



