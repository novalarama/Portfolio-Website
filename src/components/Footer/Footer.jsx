import React from 'react'
import './Footer.css'
import LogoRectangle from '../LogoRectangle/LogoRectangle'

export default function Footer() {
    return (
        <section className="h-wrapper">
            <div className="footer flexCenter paddings innerWidth h-container">
                <div className='f-top'>
                    <div className='f-top-left'>
                        <img src="./assets/photo/Simple Logo Black.png" alt="Novalarama" width={20} />
                        <img src="./assets/photo/logo.png" alt="Logo" width={100} />
                    </div>
                    <div className='f-top-right'>
                        <LogoRectangle image='./assets/photo/linkedin.png' url='https://www.linkedin.com/in/noval-akbar/' />
                        <LogoRectangle image='./assets/photo/Instagram.png' url='https://www.instagram.com/novalarama_/' />
                        <LogoRectangle image='./assets/photo/twitter.png' url='https://twitter.com/novalarama' />
                        <LogoRectangle image='./assets/photo/whatsapp.png' url='https://wa.me/6281334987026' />
                    </div>
                </div>
                <div className='f-bottom'>
                    <div className='f-bottom-left'>
                        <p>©️ 2023 novalarama. All Rights Reserved</p>
                    </div>
                    <div className='f-bottom-right'>
                        Blitar, East Java, Indonesia
                    </div>
                </div>
            </div>
        </section>
    )
}