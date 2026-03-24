const POSTS_KEY = 'blog-platform-posts'
const COMMENTS_KEY = 'blog-platform-comments'

export const savePosts = (posts) => {
  try {
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts))
  } catch (error) {
    console.error('Error saving posts:', error)
  }
}

export const loadPosts = () => {
  try {
    const posts = localStorage.getItem(POSTS_KEY)
    return posts ? JSON.parse(posts) : []
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
}

export const saveComments = (comments) => {
  try {
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments))
  } catch (error) {
    console.error('Error saving comments:', error)
  }
}

export const loadComments = () => {
  try {
    const comments = localStorage.getItem(COMMENTS_KEY)
    return comments ? JSON.parse(comments) : []
  } catch (error) {
    console.error('Error loading comments:', error)
    return []
  }
}
