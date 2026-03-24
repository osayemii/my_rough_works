# Portfolio Website

A responsive portfolio website showcasing projects and skills. Features smooth animations, modern design, and optimized performance.

## Features

- 🏠 Hero section with introduction
- 👤 About section
- 💼 Projects showcase
- 🛠️ Skills display
- 📧 Contact form
- 🌓 Dark/light theme toggle
- 📱 Fully responsive design
- 🎯 Smooth scroll navigation

## Tech Stack

- React 18.2.0
- JavaScript (ES6+)
- Vite 5.0.8
- CSS3

## Setup Instructions

1. Navigate to the project directory:
```bash
cd projects/portfolio-website
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
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── ThemeToggle.jsx
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Features in Detail

### Theme Toggle
Switch between dark and light themes. Your preference is saved in localStorage.

### Smooth Scrolling
Navigation links smoothly scroll to sections.

### Responsive Design
The website adapts to all screen sizes with a mobile-first approach.



