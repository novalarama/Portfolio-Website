import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ image, type, title, desc, url }) {
  return (
    <div className='pc'>
      <img src={image} alt={title} />
      <p>{type}</p>
      <p>{title}</p>
      <p>{desc}</p>
      {url !== '' ? (
        <button onClick={() => window.open(url, '_blank')}>Check {type}</button>
      ) : (
        <button disabled>Check {type}</button>
      )}
    </div>
  );
}