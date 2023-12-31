import React from 'react'
import "./Educations.css";
import WideRectangle from "../../components/WideRectangle/WideRectangle";

export default function Educations() {
    return (
        <section className="h-wrapper" id='educations'>
            <div className="educations flexCenter paddings innerWidth h-container">
                <div className='e-left'>
                    <img src='./assets/photo/Educations.png' />
                </div>
                <div className='e-right'>
                    <WideRectangle title='College' instance='Institut Teknologi Sepuluh Nopember' major='Information System' time='Present'/>
                    <WideRectangle title='Senior High School' instance='SMK Telkom Malang' major='Software Engineering' time='2023'/>
                    <WideRectangle title='Junior High School' instance='MTsN 1 Kota Blitar' major='Islamic Education' time='2020'/>
                </div>
            </div>
        </section>
    )
}