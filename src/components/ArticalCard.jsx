import React from 'react'
import "./ArticalCard.css"  
import techpic from "../Pages/tech.jpg" 

const ArticalCard = ({ title, imageurl, url }) => {
  return (
    <div className="card">
      {/* Left side: image (optional) */}
      
        <div className="card-image-wrapper">
          <img src={imageurl?imageurl:techpic} alt={title} className="card-image"/>
        </div>
     

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

