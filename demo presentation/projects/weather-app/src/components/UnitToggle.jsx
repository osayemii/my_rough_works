import './UnitToggle.css'

const UnitToggle = ({ unit, onUnitChange }) => {
  return (
    <div className="unit-toggle">
      <button
        className={`unit-btn ${unit === 'celsius' ? 'active' : ''}`}
        onClick={() => onUnitChange('celsius')}
      >
        °C
      </button>
      <button
        className={`unit-btn ${unit === 'fahrenheit' ? 'active' : ''}`}
        onClick={() => onUnitChange('fahrenheit')}
      >
        °F
      </button>
    </div>
  )
}

export default UnitToggle



