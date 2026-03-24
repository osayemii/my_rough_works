import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { loadPosts } from '../utils/storage'
import { initialPosts } from '../data/posts'
import './PostList.css'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    const savedPosts = loadPosts()
    if (savedPosts.length === 0) {
      setPosts(initialPosts)
    } else {
      setPosts(savedPosts)
    }
  }, [])

  const categories = ['all', ...new Set(posts.map((p) => p.category))]

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="post-list">
      <div className="list-header">
        <h1>Blog Posts</h1>
        <Link to="/create" className="create-btn">
          + Create Post
        </Link>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`} className="post-card">
            <h2>{post.title}</h2>
            <div className="post-meta">
              <span>{post.author}</span>
              <span>{post.category}</span>
              <span>{post.createdAt}</span>
            </div>
            <div
              className="post-preview"
              dangerouslySetInnerHTML={{ __html: post.content.substring(0, 150) + '...' }}
            />
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="empty-state">
          <p>No posts found. Create one to get started!</p>
        </div>
      )}
    </div>
  )
}

export default PostList



