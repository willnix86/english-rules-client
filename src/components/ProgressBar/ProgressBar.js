import React from 'react';
import './ProgressBar.css';

export default function ProgressBar(props) {
    
    const fillStyle = {
            width: props.AMOUNT + '%',
            height: '10px',
            backgroundColor: '#EE7137',
            borderRadius: '8px',
            textAlign: 'center',
            lineHeight: '40px'
        }

    return (
        <div className="ProgressBar">
            <div style={fillStyle}></div>
        </div>
    )

}