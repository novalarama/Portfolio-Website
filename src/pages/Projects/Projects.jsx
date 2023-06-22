import React, { useState } from 'react'
import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Modal from 'react-modal'

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <section className="h-wrapper" id="projects">
            <div className="projects flexCenter paddings innerWidth h-container">
                <div className="pr-top">
                    <p>I built<br /><span>these projects</span></p>
                    <p className='pr-more' onClick={openModal}>See All {'>'}</p>
                </div>
                <div className="pr-bottom">
                    <ProjectCard image='./assets/photo/Projects-1.png' url='' type='UI Design' title='NANGGAP APP Design' desc='This is an app design for my competition, and successfull won a competition.' />
                    <ProjectCard image='./assets/photo/Projects-2.png' ur='https://bit.ly/AplikasiJulain' type='App' title='Jualin App' desc='This is an app for help sellers to sell their products.' />
                    <ProjectCard image='./assets/photo/Projects-3.png' type='Web' title='Inap Web' desc='This is an web for organize rooms hotel.' />
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Projects Modal"
                style={customModalStyles}
            >
                <div className="modal-header">
                    <button className="close-button" onClick={closeModal}>
                        <img src="./assets/photo/Icon-close.png" alt="Close" />
                    </button>
                </div>
                <div className="modal-content">
                    <h2>Sorry, data is not yet available!</h2>
                    <img className="modal-image" src="./assets/photo/Icon-empty.png" alt="" />
                </div>
            </Modal>
        </section>
    )
}
const customModalStyles = {
    content: {
        width: '50%',
        height: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root'); 