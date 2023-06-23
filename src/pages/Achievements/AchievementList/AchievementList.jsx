import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './AchievementList.css'

export default function AchievementList() {
    let [data, setData] = useState([])
    let [searchQuery, setSearchQuery] = useState('')
    let navigate = useNavigate()

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = new Date(date + '-01').toLocaleDateString('en-US', options);
        return formattedDate;
    };

    const goBack = () => {
        navigate(-1);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = data.filter((achievement) =>
        achievement.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        fetch('./assets/doc/achieveData.json')
            .then((res) => res.json())
            .then((data) => {
                const sortedData = data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setData(sortedData);
            });
    }, []);
    return (
        <div className='App'>
            <div className="achievement-list flexCenter paddings innerWidth h-container">
                <div className="header">
                    <button className="back-button" onClick={goBack}>{'< '}Back</button>
                    <input type="text" placeholder="Search" className="search" value={searchQuery}
                        onChange={handleSearchChange} />
                </div>
                <div className="achievement-container">
                    {filteredData.map((achievement) => (
                        <div className="achievement-card" key={achievement.id}>
                            <img src={achievement.image} alt="Achievement" className="achievement-image" />
                            <div className="achievement-details">
                                <p className="achievement-type-date">{achievement.type} ● {formatDate(achievement.date)}</p>
                                <p className="achievement-title">{achievement.title}</p>
                                <p className="achievement-desc">{achievement.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}