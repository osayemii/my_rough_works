import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, className = "" }) => {
  return (
    <div className={`scroll-stack-card ${className}`}>
      {children}
    </div>
  );
};

export default function ScrollStack({
  children,
  className = "",
  containerClassName = "",
  speed = 1,
  scrollContainer = window,
  baseScale = 1,
  scaleRange = 0.05,
  opacityRange = 0.5,
  rotationRange = 0,
  displacementRange = 0,
}) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const updateItems = useCallback(() => {
    if (!itemsRef.current.length || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerHeight = containerRef.current.offsetHeight;

    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      
      const rect = item.getBoundingClientRect();
      const relativeTop = rect.top - containerTop;
      const progress = relativeTop / containerHeight;
      const absProgress = Math.abs(progress);

      const scale = baseScale - (absProgress * scaleRange);
      const opacity = 1 - (absProgress * opacityRange);
      const rotation = progress * rotationRange;
      const displacement = progress * displacementRange;

      item.style.transform = `
        scale(${scale}) 
        rotate(${rotation}deg) 
        translateY(${displacement}px)
        translateZ(0)
      `;
      item.style.opacity = opacity;
    });
  }, [baseScale, scaleRange, opacityRange, rotationRange, displacementRange]);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      updateItems();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [updateItems]);

  return (
    <div className={`scroll-stack-container ${containerClassName}`} ref={containerRef}>
      <div className={`scroll-stack-content ${className}`}>
        {Array.isArray(children) ? (
          children.map((child, index) => {
            return (
              <div 
                key={index} 
                ref={(el) => (itemsRef.current[index] = el)} 
                className="scroll-stack-item-wrapper"
              >
                {child}
              </div>
            );
          })
        ) : (
          <div ref={(el) => (itemsRef.current[0] = el)}>
            {children}
          </div>
        )}
      </div>
      <div className="scroll-stack-end"></div>
    </div>
  );
}
