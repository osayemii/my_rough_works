import './Logo.css'

const Logo = () => {
  return (
    <div className="logo">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Code brackets / Developer icon */}
        <path
          d="M10 12 L6 18 L10 24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="logo-bracket"
        />
        <path
          d="M26 12 L30 18 L26 24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="logo-bracket"
        />
        {/* Center dot representing focus/quality */}
        <circle
          cx="18"
          cy="18"
          r="2.5"
          fill="currentColor"
          className="logo-dot"
        />
        {/* Subtle glow effect */}
        <circle
          cx="18"
          cy="18"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
          className="logo-glow"
        />
      </svg>
    </div>
  )
}

export default Logo

