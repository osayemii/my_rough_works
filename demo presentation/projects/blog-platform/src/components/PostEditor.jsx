import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { loadPosts, savePosts } from '../utils/storage'
import './PostEditor.css'

const PostEditor = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('Technology')

  useEffect(() => {
    if (id) {
      const posts = loadPosts()
      const post = posts.find((p) => p.id === parseInt(id))
      if (post) {
        setTitle(post.title)
        setContent(post.content)
        setCategory(post.category)
      }
    }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() && content.trim()) {
      const posts = loadPosts()
      if (id) {
        // Update existing post
        const updatedPosts = posts.map((p) =>
          p.id === parseInt(id)
            ? { ...p, title, content, category }
            : p
        )
        savePosts(updatedPosts)
      } else {
        // Create new post
        const newPost = {
          id: Date.now(),
          title,
          content,
          category,
          author: 'Current User',
          createdAt: new Date().toISOString().split('T')[0],
        }
        savePosts([...posts, newPost])
      }
      navigate('/')
    }
  }

  return (
    <div className="post-editor">
      <h1>{id ? 'Edit Post' : 'Create New Post'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="Technology">Technology</option>
          <option value="Design">Design</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="editor"
        />
        <div className="editor-actions">
          <button type="submit" className="submit-btn">
            {id ? 'Update Post' : 'Publish Post'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostEditor



