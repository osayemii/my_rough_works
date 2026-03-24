import { useEffect, useRef } from 'react'
import './BubbleBackground.css'

const BubbleBackground = () => {
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)
  const bubblesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let resizeTimeout

    // Initialize bubbles
    const initBubbles = () => {
      bubblesRef.current = []
      const bubbleCount = 25

      for (let i = 0; i < bubbleCount; i++) {
        bubblesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 60 + 20,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
        })
      }
    }

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initBubbles()
    }

    // Draw bubble with glassmorphism effect
    const drawBubble = (bubble) => {
      const gradient = ctx.createRadialGradient(
        bubble.x - bubble.radius * 0.3,
        bubble.y - bubble.radius * 0.3,
        0,
        bubble.x,
        bubble.y,
        bubble.radius
      )

      gradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity * 0.8})`)
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${bubble.opacity * 0.3})`)
      gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)

      ctx.beginPath()
      ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubblesRef.current.forEach((bubble) => {
        // Update position
        bubble.x += bubble.speedX
        bubble.y += bubble.speedY

        // Wrap around edges
        if (bubble.x < -bubble.radius) bubble.x = canvas.width + bubble.radius
        if (bubble.x > canvas.width + bubble.radius) bubble.x = -bubble.radius
        if (bubble.y < -bubble.radius) bubble.y = canvas.height + bubble.radius
        if (bubble.y > canvas.height + bubble.radius) bubble.y = -bubble.radius

        // Draw bubble
        drawBubble(bubble)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Handle resize with debouncing
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        setCanvasSize()
      }, 250)
    }

    // Initialize
    setCanvasSize()
    animate()

    // Event listeners
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      clearTimeout(resizeTimeout)
    }
  }, [])

  return <canvas ref={canvasRef} className="bubble-background" />
}

export default BubbleBackground

