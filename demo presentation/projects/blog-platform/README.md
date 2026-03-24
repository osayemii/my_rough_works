# Blog Platform

A full-featured blogging platform with rich text editing, comment system, and user authentication. Designed for content creators and writers.

## Features

- ✍️ Rich text editor for creating blog posts (React Quill)
- 📝 Display blog posts in a feed/list view
- 📄 Individual blog post pages with full content
- 💬 Comment system: Add comments to posts
- 🔍 Search functionality: Search posts by title or content
- 🏷️ Categories/Tags: Organize posts by topics
- 💾 Local storage persistence
- 📱 Fully responsive design

## Tech Stack

- React 18.2.0
- JavaScript (ES6+)
- React Router DOM for navigation
- React Quill for rich text editing
- Vite 5.0.8
- CSS3
- LocalStorage API

## Setup Instructions

1. Navigate to the project directory:
```bash
cd projects/blog-platform
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
blog-platform/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── PostList.jsx
│   │   ├── PostDetail.jsx
│   │   ├── PostEditor.jsx
│   │   ├── CommentSection.jsx
│   │   └── CommentForm.jsx
│   ├── data/
│   │   └── posts.js
│   ├── utils/
│   │   └── storage.js
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

1. **View posts**: Browse all blog posts on the home page
2. **Search posts**: Use the search bar to find posts by title or content
3. **Filter by category**: Select a category from the dropdown
4. **Create post**: Click "Create Post" to write a new blog post
5. **Edit post**: Navigate to a post and click edit (if implemented)
6. **Add comments**: Scroll to the comment section and add your thoughts
7. **View post details**: Click on any post card to read the full content

## Features in Detail

### Rich Text Editor
Create formatted blog posts with React Quill editor supporting bold, italic, headings, lists, links, and more.

### Comment System
Users can add comments to blog posts. Comments are stored in local storage and displayed on each post page.

### Search & Filter
Search posts by title or content, and filter by category for easy navigation.

### Local Storage Persistence
All posts and comments are automatically saved to browser's local storage.

### Responsive Design
The platform adapts to all screen sizes with a mobile-friendly layout.



