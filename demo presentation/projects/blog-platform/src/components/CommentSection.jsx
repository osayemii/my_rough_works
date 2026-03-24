import { useState, useEffect } from 'react'
import { loadComments, saveComments } from '../utils/storage'
import CommentForm from './CommentForm'
import './CommentSection.css'

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const allComments = loadComments()
    setComments(allComments.filter((c) => c.postId === postId))
  }, [postId])

  const handleAddComment = (comment) => {
    const newComment = {
      id: Date.now(),
      postId,
      ...comment,
      createdAt: new Date().toISOString(),
    }
    const allComments = loadComments()
    saveComments([...allComments, newComment])
    setComments([...comments, newComment])
  }

  return (
    <div className="comment-section">
      <h2>Comments ({comments.length})</h2>
      <CommentForm onAdd={handleAddComment} />
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment-header">
              <strong>{comment.author}</strong>
              <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection



