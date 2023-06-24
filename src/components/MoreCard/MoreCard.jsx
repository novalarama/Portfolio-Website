import React from 'react'
import { Link } from 'react-router-dom';
import './MoreCard.css'

export default function MoreCard() {
    return (
        <div className="more-card">
            <Link id='achievement-list' to="/achievementList">
                <p>See All {'>'}</p>
            </Link>
        </div>
    )
}