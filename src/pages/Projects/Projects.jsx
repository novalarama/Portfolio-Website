import React from 'react'
import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function Projects() {
    return (
        <section className="h-wrapper" id="projects">
            <div className="projects flexCenter paddings innerWidth h-container">
                <div className="pr-top">
                    <p>I built<br /><span>these projects</span></p>
                    <p className='pr-more'>See All {'>'}</p>
                </div>
                <div className="pr-bottom">
                    <ProjectCard image='./assets/photo/Projects-1.png' type='UI Design' title='NANGGAP APP Designn' desc='This is an app design for my competition, and successfull won a competition.' />
                    <ProjectCard image='./assets/photo/Projects-2.png' type='App' title='Jualin App' desc='This is an app for help sellers to sell their products.' />
                    <ProjectCard image='./assets/photo/Projects-3.png' type='Web' title='Inap Web' desc='This is an web for organize rooms hotel.' />
                </div>
            </div>
        </section>
    )
}