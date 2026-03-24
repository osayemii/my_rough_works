const STORAGE_KEY = 'todo-list-app-tasks'

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error)
  }
}

export const loadTasks = () => {
  try {
    const tasks = localStorage.getItem(STORAGE_KEY)
    return tasks ? JSON.parse(tasks) : []
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error)
    return []
  }
}



