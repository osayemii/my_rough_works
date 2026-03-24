import { useState } from 'react'
import './TodoForm.css'

const TodoForm = ({ onAdd }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onAdd(input)
      setInput('')
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      <button type="submit" className="todo-add-btn">
        Add
      </button>
    </form>
  )
}

export default TodoForm



