import React, { useState } from "react";
import "./FloatingDiv.css";

export default function FloatingDiv ({image, altText}) {
    return (
        <div className="floating-div">
            <img src={image} alt={altText}/>
        </div>
    )
}