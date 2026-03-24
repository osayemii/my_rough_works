import './TodoFilter.css'

const TodoFilter = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
  ]

  return (
    <div className="todo-filter">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`filter-btn ${currentFilter === filter.id ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter



