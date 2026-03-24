import './PriorityBadge.css'

const PriorityBadge = ({ priority }) => {
  const getPriorityClass = () => {
    switch (priority) {
      case 'high':
        return 'priority-high'
      case 'medium':
        return 'priority-medium'
      case 'low':
        return 'priority-low'
      default:
        return 'priority-medium'
    }
  }

  return (
    <span className={`priority-badge ${getPriorityClass()}`}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  )
}

export default PriorityBadge



