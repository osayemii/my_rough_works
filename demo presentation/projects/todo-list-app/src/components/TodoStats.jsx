import './TodoStats.css'

const TodoStats = ({ stats }) => {
  return (
    <div className="todo-stats">
      <div className="stat-item">
        <span className="stat-value">{stats.total}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">{stats.active}</span>
        <span className="stat-label">Active</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">{stats.completed}</span>
        <span className="stat-label">Completed</span>
      </div>
    </div>
  )
}

export default TodoStats



