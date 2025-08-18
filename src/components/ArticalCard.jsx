import React from 'react'
import "./ArticalCard.css"   

const ArticalCard = ({ title, imageurl, url }) => {
  return (
    <div className="card">
      {/* Left side: image (optional) */}
      {imageurl && (
        <div className="card-image-wrapper">
          <img src={imageurl} alt={title} className="card-image"/>
        </div>
      )}

      {/* Right side: content */}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">
          Read More →
        </a>
      </div>
    </div>
  )
}

export default ArticalCard

