import React from 'react'
import './LogoRectangle.css'

export default function LogoRectangle ({image, url}) {
  return (
    <div className='logo-rectangle'>
        <img src={image} onClick={() => window.open(url, "_blank")}/>
    </div>
  )
}