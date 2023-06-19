import React, { useState } from "react";
import "./WideRectangle.css";

export default function WideRectangle ({title, instance, major, time}) {
    return (
        <div className="wide-rectangle">
            <div className="left-part">
                <p>{title}</p>
                <p>{instance}</p>
                <p>{major}</p>
            </div>
            <div className="right-part">
                <p>{time}</p>
            </div>
        </div>
    )
}