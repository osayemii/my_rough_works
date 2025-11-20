import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../styles/Modal.css';

export default function Modal({ product, onClose }) {
  // Block body scroll when modal is open
  useEffect(() => {
    if (product) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Block scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      // Cleanup: restore scrolling when modal closes
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [product]);

  if (!product) return null;

  const modalContent = (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        <div className="modal-wrapper">
          <div className="modal-image-container">
            <img src={product.img} alt={product.name} className="modal-image" />
          </div>
          <div className="modal-body">
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-price">{product.price}</p>
            <p className="modal-description">{product.desc}</p>
            
            {product.properties && (
              <div className="modal-properties">
                <div className="property-item">
                  <span className="property-icon">💧</span>
                  <div className="property-content">
                    <span className="property-label">Water Resistance</span>
                    <span className="property-value">{product.properties.waterResistance}</span>
                  </div>
                </div>
                <div className="property-item">
                  <span className="property-icon">⚙️</span>
                  <div className="property-content">
                    <span className="property-label">Movement</span>
                    <span className="property-value">{product.properties.movement}</span>
                  </div>
                </div>
                <div className="property-item">
                  <span className="property-icon">🔩</span>
                  <div className="property-content">
                    <span className="property-label">Case Material</span>
                    <span className="property-value">{product.properties.caseMaterial}</span>
                  </div>
                </div>
                <div className="property-item">
                  <span className="property-icon">💎</span>
                  <div className="property-content">
                    <span className="property-label">Crystal</span>
                    <span className="property-value">{product.properties.crystal}</span>
                  </div>
                </div>
              </div>
            )}
            
            <button className="modal-button" onClick={() => {
              alert(`Thank you for your interest in ${product.name}! We'll contact you soon.`);
            }}>
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}