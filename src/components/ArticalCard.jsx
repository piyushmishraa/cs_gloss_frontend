import React from 'react'
import "./ArticalCard.css"   
import tech from "../Pages/tech.jpg"

const ArticalCard = ({ title, imageurl, url }) => {
  return (
    <div className="card">
      {/* Image */}
      
      {<img src={imageurl?imageurl:tech} alt={title} className="card-image"/>}

      {/* Title */}
      <h2 className="card-title">{title}</h2>

      {/* Link */}
      <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">
        Read More →
      </a>
    </div>
  )
}

export default ArticalCard
