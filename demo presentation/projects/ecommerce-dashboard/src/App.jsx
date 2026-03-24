import { useState } from 'react'
import Sidebar from './components/Sidebar'
import DashboardContent from './components/DashboardContent'
import './styles/App.css'

function App() {
  const [activeView, setActiveView] = useState('dashboard')

  return (
    <div className="app">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <DashboardContent activeView={activeView} />
    </div>
  )
}

export default App



