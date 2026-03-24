# Todo List App

A modern task management application built with React. Features include adding, editing, deleting tasks, local storage persistence, and a clean, intuitive interface.

## Features

- ✅ Add new tasks with a clean input interface
- ✏️ Edit existing tasks inline (double-click or edit button)
- 🗑️ Delete tasks with confirmation
- ☑️ Mark tasks as complete/incomplete with checkboxes
- 🔍 Filter tasks by status (All, Active, Completed)
- 🧹 Clear all completed tasks functionality
- 💾 Local storage persistence - tasks persist after page refresh
- 📊 Task counter showing total/active/completed counts
- 📱 Fully responsive design

## Tech Stack

- React 18.2.0
- JavaScript (ES6+)
- Vite 5.0.8
- CSS3
- LocalStorage API

## Setup Instructions

1. Navigate to the project directory:
```bash
cd projects/todo-list-app
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
todo-list-app/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx       # Add task input
│   │   ├── TodoList.jsx       # Task list display
│   │   ├── TodoItem.jsx       # Individual task
│   │   ├── TodoFilter.jsx     # Filter buttons
│   │   └── TodoStats.jsx      # Task counter
│   ├── utils/
│   │   └── storage.js         # LocalStorage helpers
│   ├── styles/
│   │   ├── index.css          # Global styles
│   │   └── App.css            # App styles
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Usage

1. **Add a task**: Type in the input field and click "Add" or press Enter
2. **Complete a task**: Click the checkbox next to a task
3. **Edit a task**: Double-click the task text or click the edit button
4. **Delete a task**: Click the delete button
5. **Filter tasks**: Use the filter buttons (All, Active, Completed)
6. **Clear completed**: Click "Clear Completed" button when you have completed tasks

## Features in Detail

### Local Storage Persistence
All tasks are automatically saved to browser's local storage. Your tasks will persist even after closing the browser.

### Responsive Design
The app is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

### Smooth Animations
All interactions include smooth transitions and hover effects for a polished user experience.



