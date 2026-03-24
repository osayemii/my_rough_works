import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Blog Platform
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



