import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import TodoStats from './components/TodoStats'
import { loadTasks, saveTasks } from './utils/storage'
import './styles/App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  useEffect(() => {
    const savedTasks = loadTasks()
    setTodos(savedTasks)
  }, [])

  useEffect(() => {
    saveTasks(todos)
  }, [todos])

  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      }
      setTodos([newTodo, ...todos])
    }
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const editTodo = (id, newText) => {
    if (newText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText.trim() } : todo
        )
      )
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const stats = {
    total: todos.length,
    active: todos.filter((todo) => !todo.completed).length,
    completed: todos.filter((todo) => todo.completed).length,
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Todo List</h1>
        <p className="app-subtitle">Stay organized and productive</p>
      </header>

      <div className="todo-container">
        <TodoForm onAdd={addTodo} />
        <TodoStats stats={stats} />
        <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onEdit={editTodo}
          onDelete={deleteTodo}
        />
        {stats.completed > 0 && (
          <button className="clear-completed" onClick={clearCompleted}>
            Clear Completed ({stats.completed})
          </button>
        )}
      </div>
    </div>
  )
}

export default App



