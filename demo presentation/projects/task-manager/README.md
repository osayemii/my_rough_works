# Task Manager

Advanced task management system with project organization, priority settings, and team collaboration features. Built for productivity and efficiency.

## Features

- 📁 Create and manage multiple projects/categories
- ✅ Add tasks within projects with due dates and priorities
- 🎯 Set task priorities (High, Medium, Low) with visual indicators
- 🔍 Filter and sort tasks by priority or date
- ✏️ Edit and delete tasks
- 💾 Local storage persistence
- 📱 Fully responsive design

## Tech Stack

- React 18.2.0
- JavaScript (ES6+)
- Context API for state management
- Vite 5.0.8
- CSS3
- LocalStorage API

## Setup Instructions

1. Navigate to the project directory:
```bash
cd projects/task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
task-manager/
├── src/
│   ├── components/
│   │   ├── TaskManagerApp.jsx
│   │   ├── ProjectSidebar.jsx
│   │   ├── ProjectView.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskCard.jsx
│   │   ├── PriorityBadge.jsx
│   │   └── FilterBar.jsx
│   ├── context/
│   │   └── TaskContext.jsx
│   ├── reducers/
│   │   └── taskReducer.js
│   ├── utils/
│   │   ├── storage.js
│   │   └── dateHelpers.js
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Usage

1. **Create a project**: Click the "+" button in the sidebar and enter a project name
2. **Select a project**: Click on a project in the sidebar to view its tasks
3. **Add a task**: Click "Add Task" and fill in the task details
4. **Set priority**: Choose High, Medium, or Low priority when creating/editing tasks
5. **Filter tasks**: Use the filter dropdown to show tasks by priority
6. **Sort tasks**: Use the sort dropdown to organize tasks by date or priority
7. **Complete tasks**: Check the checkbox to mark tasks as complete
8. **Edit/Delete**: Use the buttons on each task card

## Features in Detail

### Context API State Management
The app uses React Context API for global state management, making it easy to share data across components.

### Local Storage Persistence
All projects and tasks are automatically saved to browser's local storage.

### Priority System
Tasks can be assigned High, Medium, or Low priority with color-coded badges.

### Responsive Design
The app adapts to all screen sizes with a mobile-friendly layout.



