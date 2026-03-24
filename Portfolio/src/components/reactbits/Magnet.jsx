import { useState, useEffect, useRef } from "react";

const Magnet = ({ 
  children, 
  padding = 100, 
  disabled = false, 
  magnetStrength = 2, 
  activeMagnet = true, 
  ...props 
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled || !activeMagnet) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(clientX - centerX);
      const distY = Math.abs(clientY - centerY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        const deltaX = (clientX - centerX) * magnetStrength;
        const deltaY = (clientY - centerY) * magnetStrength;
        setPosition({ x: deltaX, y: deltaY });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, disabled, magnetStrength, activeMagnet]);

  return (
    <div
      ref={magnetRef}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        style={{
          transition: "transform 0.2s ease-out",
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
