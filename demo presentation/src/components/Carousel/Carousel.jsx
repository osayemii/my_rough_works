import { useState, useEffect, useRef } from 'react'
import './Carousel.css'

const Carousel = ({ items, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)
  const carouselRef = useRef(null)

  // Ensure first slide is visible on mount
  useEffect(() => {
    if (items.length > 0) {
      setCurrentIndex(0)
    }
  }, [items.length])

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    if (autoPlay && !isPaused && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
      }, interval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [autoPlay, isPaused, items.length, interval])

  const goToSlide = (index) => {
    if (index >= 0 && index < items.length) {
      // Clear auto-play interval when manually navigating
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      setCurrentIndex(index)
      // Resume auto-play after a delay
      setTimeout(() => {
        if (autoPlay && !isPaused && items.length > 1) {
          intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
          }, interval)
        }
      }, 2000)
    }
  }

  const goToPrevious = () => {
    // Clear auto-play interval when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
    // Resume auto-play after a delay
    setTimeout(() => {
      if (autoPlay && !isPaused && items.length > 1) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        }, interval)
      }
    }, 2000)
  }

  const goToNext = () => {
    // Clear auto-play interval when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    // Resume auto-play after a delay
    setTimeout(() => {
      if (autoPlay && !isPaused && items.length > 1) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        }, interval)
      }
    }, 2000)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div
      ref={carouselRef}
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-container">
        <button
          className="carousel-button carousel-button-prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="carousel-slides">
          {items.map((item, index) => {
            const isActive = index === currentIndex
            const isPrev = index < currentIndex
            const isNext = index > currentIndex
            
            return (
            <div
              key={`slide-${index}`}
              className={`carousel-slide ${
                isActive ? 'active' : ''
              } ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
            >
              <div className="carousel-slide-content glass">
                {item.image ? (
                  <div className="carousel-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                ) : (
                  <div className="carousel-icon">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.5"
                      />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.5"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                )}
                <div className="carousel-text">
                  <h3 className="carousel-title">{item.title}</h3>
                  {item.description && (
                    <p className="carousel-description">{item.description}</p>
                  )}
                  {item.tech && (
                    <div className="carousel-tech">
                      {item.tech.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="carousel-link"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              </div>
            </div>
            )
          })}
        </div>

        <button
          className="carousel-button carousel-button-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel

