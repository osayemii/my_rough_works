import { createContext, useContext, useReducer, useEffect } from 'react'
import { loadTasks, saveTasks } from '../utils/storage'
import taskReducer from '../reducers/taskReducer'

const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within TaskProvider')
  }
  return context
}

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    projects: [],
    tasks: [],
    selectedProject: null,
  })

  useEffect(() => {
    const saved = loadTasks()
    if (saved.projects.length > 0 || saved.tasks.length > 0) {
      dispatch({ type: 'LOAD_DATA', payload: saved })
    }
  }, [])

  useEffect(() => {
    saveTasks({ projects: state.projects, tasks: state.tasks })
  }, [state.projects, state.tasks])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}



