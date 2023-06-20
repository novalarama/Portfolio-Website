import React from 'react'
import "./Achievements.css";
import Card from '../../components/Card/Card';
import MoreCard from '../../components/MoreCard/MoreCard';

export default function Achievements() {
    return (
        <div className='a-bg'>
            <section id='achievements'>
                <div className="achievements flexCenter paddings innerWidth h-container">
                    <div className='a-left'>
                        <img src='./assets/photo/Achievements.png' />
                        <p>What did I achieve</p>
                        <p>Diverse achievements attained through practical learning empower me to tackle challenges with confidence and creativity.</p>
                    </div>
                    <div className='a-right'>
                        <div className='a-right-top'>
                            <p>See All {'>'}</p>
                        </div>
                        <div className='a-right-bottom'>
                            <Card image='./assets/photo/Bionix.jpg' type='Competition' date='November 2022' title='Winner of BIONIX 2022' desc='This is my result of Bionix Competition. Thanks a lot for my mentors and my friends, these love for you all' />
                            <Card image='./assets/photo/UAJY2023.jpg' type='Competition' date='March 2023' title='3rd Winner of I2C 2023' desc='This is my result of Bionix Competition. Thanks a lot for my mentors and my friends, these love for you all' />
                            <MoreCard />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}