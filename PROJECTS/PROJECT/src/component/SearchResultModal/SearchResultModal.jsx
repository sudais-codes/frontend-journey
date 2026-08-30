import React from 'react'
import './SearchResultModal.css'

const SearchResultModal = ({ product, onClose }) => {

  if (!product) return null

  return (
    // Outer dark semi-transparent backdrop covering full screen
    <div className="modal-backdrop" onClick={onClose}>
      {/* 
        Modal card container
        e.stopPropagation() prevents clicks inside the card from closing the modal
      */}
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close (X) button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Product Image */}
        <div className="modal-image-wrapper">
          <img 
            src={product.image} 
            alt={product.title} 
            className="modal-image" 
          />
        </div>

        {/* Product Details */}
        <div className="modal-info">
          <h3 className="modal-title">{product.title}</h3>
          <p className="modal-description">
            {product.discription || product.description}
          </p>

          <div className="modal-footer">
            <span className="modal-price">{product.price}</span>
            <button className="modal-buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResultModal
