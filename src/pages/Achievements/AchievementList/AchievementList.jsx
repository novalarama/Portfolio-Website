import React, { useState, useEffect } from 'react'
import './AchievementList.css'

export default function AchievementList() {
    let [data, setData] = useState([])

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = new Date(date + '-01').toLocaleDateString('en-US', options);
        return formattedDate;
    };

    useEffect(() => {
        fetch('./assets/doc/achieveData.json')
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [])
    return (
        <div className='App'>
            <div className="achievement-list flexCenter paddings innerWidth h-container">
                <div className="header">
                    <button className="back-button">Back</button>
                    <input type="text" placeholder="Search" className="search-input" />
                </div>
                <div className="achievement-container">
                    {data.map((achievement) => (
                        <div className="achievement-card" key={achievement.id}>
                            <img src={achievement.image} alt="Achievement" className="achievement-image" />
                            <div className="achievement-details">
                                <h3 className="achievement-title">{achievement.title}</h3>
                                <p className="achievement-desc">{achievement.description}</p>
                                <p className="achievement-date">{formatDate(achievement.date)}</p>
                                <p className="achievement-type">{achievement.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}