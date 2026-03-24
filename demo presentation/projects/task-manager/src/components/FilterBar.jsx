import './FilterBar.css'

const FilterBar = ({ filter, onFilterChange, sortBy, onSortChange }) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Filter:</label>
        <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
          <option value="all">All</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Sort:</label>
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="date">Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar



