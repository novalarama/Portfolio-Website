import React from 'react';
import './MiniRectangle.css';

export default function MiniRectangle({ image, title, status }) {
  return (
    <div className="mini-rectangle">
      <div className="mr-left-part">
        <img src={image} />
      </div>
      <div className="mr-right-part">
        <p>{title}</p>
        <p>{status}</p>
      </div>
    </div>
  )
}