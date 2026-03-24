const taskReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...state,
        projects: action.payload.projects || [],
        tasks: action.payload.tasks || [],
      }

    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload],
      }

    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((p) => p.id !== action.payload),
        tasks: state.tasks.filter((t) => t.projectId !== action.payload),
        selectedProject:
          state.selectedProject === action.payload
            ? null
            : state.selectedProject,
      }

    case 'SELECT_PROJECT':
      return {
        ...state,
        selectedProject: action.payload,
      }

    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }

    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? { ...t, ...action.payload } : t
        ),
      }

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      }

    default:
      return state
  }
}

export default taskReducer



