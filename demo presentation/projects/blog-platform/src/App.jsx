import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import PostEditor from './components/PostEditor'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create" element={<PostEditor />} />
          <Route path="/edit/:id" element={<PostEditor />} />
        </Routes>
      </main>
    </div>
  )
}

export default App



