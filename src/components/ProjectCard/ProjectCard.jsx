import React from 'react'
import './ProjectCard.css'

export default function ProjectCard ({image, type, title, desc}) {
  return (
    <div className='pc'>
        <img src={image} alt={title} />
        <p>{type}</p>
        <p>{title}</p>
        <p>{desc}</p>
        <button>Check {type}</button>
    </div>
  )
}