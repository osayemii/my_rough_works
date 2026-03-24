const STORAGE_KEY = 'task-manager-data'

export const saveTasks = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Error saving tasks:', error)
  }
}

export const loadTasks = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : { projects: [], tasks: [] }
  } catch (error) {
    console.error('Error loading tasks:', error)
    return { projects: [], tasks: [] }
  }
}



