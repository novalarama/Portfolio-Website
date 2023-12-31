import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Achievements.css";
import Card from '../../components/Card/Card';
import MoreCard from '../../components/MoreCard/MoreCard';

export default function Achievements() {
    let [data, setData] = useState([])

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = new Date(date + '-01').toLocaleDateString('en-US', options);
        return formattedDate;
    };

    useEffect(() => {
        fetch('./assets/doc/achieveData.json')
          .then((res) => res.json())
          .then((data) => {
            const sortedData = data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
            const topTwoData = sortedData.slice(0, 2);
            setData(topTwoData);
          });
      }, []);
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
                            <Link id='achievement-list' to="/achievementList">
                                <p>See All {'>'}</p>
                            </Link>
                        </div>
                        <div className='a-right-bottom'>
                            {data.map((item) => (
                                <Card
                                    key={item.id}
                                    image={item.image}
                                    type={item.type}
                                    date={formatDate(item.date)}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            ))}
                            <MoreCard />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}