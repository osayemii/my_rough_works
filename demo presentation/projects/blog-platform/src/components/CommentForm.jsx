import { useState } from 'react'
import './CommentForm.css'

const CommentForm = ({ onAdd }) => {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (author.trim() && text.trim()) {
      onAdd({ author: author.trim(), text: text.trim() })
      setAuthor('')
      setText('')
    }
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  )
}

export default CommentForm



