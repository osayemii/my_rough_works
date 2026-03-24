import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { loadPosts } from '../utils/storage'
import CommentSection from './CommentSection'
import './PostDetail.css'

const PostDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const posts = loadPosts()
    const foundPost = posts.find((p) => p.id === parseInt(id))
    setPost(foundPost)
  }, [id])

  if (!post) {
    return <div className="post-detail">Post not found</div>
  }

  return (
    <div className="post-detail">
      <Link to="/" className="back-link">
        ← Back to Posts
      </Link>
      <article className="post-content">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>By {post.author}</span>
          <span>{post.category}</span>
          <span>{post.createdAt}</span>
        </div>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <CommentSection postId={parseInt(id)} />
    </div>
  )
}

export default PostDetail



