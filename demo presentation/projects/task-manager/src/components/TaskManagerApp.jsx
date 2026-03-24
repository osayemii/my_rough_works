import { useState } from 'react'
import { useTasks } from '../context/TaskContext'
import ProjectSidebar from './ProjectSidebar'
import ProjectView from './ProjectView'
import './TaskManagerApp.css'

const TaskManagerApp = () => {
  const { state } = useTasks()

  return (
    <div className="task-manager-app">
      <ProjectSidebar />
      <div className="main-content">
        {state.selectedProject ? (
          <ProjectView projectId={state.selectedProject} />
        ) : (
          <div className="welcome-screen">
            <h1>Welcome to Task Manager</h1>
            <p>Select a project or create a new one to get started</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TaskManagerApp



