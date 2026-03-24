import { TaskProvider } from './context/TaskContext'
import TaskManagerApp from './components/TaskManagerApp'
import './styles/App.css'

function App() {
  return (
    <TaskProvider>
      <TaskManagerApp />
    </TaskProvider>
  )
}

export default App



