import React from 'react'
import './Card.css'

export default function Card({ image, type, date, title, desc }) {
    return (
        <div className="card">
            <img src={image} alt={title}/>
            <p>{type} ● {date}</p>
            <p>{title}</p>
            <p>{desc}</p>
        </div>
    )
}