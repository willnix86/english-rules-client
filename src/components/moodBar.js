import React from 'react';
import './moodBar.css';

export default function MoodBar(props) {
    
    const fillStyle = {
            width: props.percentHappy + '%',
            height: '10px',
            backgroundColor: '#EE7137',
            borderRadius: '8px',
            textAlign: 'center',
            lineHeight: '40px'
        }

    return (
        <div className="moodBar">
            <div style={fillStyle}></div>
            <p>Your sentence was {props.percentHappy}% happy and {props.percentSad}% sad</p>
        </div>
    )

}