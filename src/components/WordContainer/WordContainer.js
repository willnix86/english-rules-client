import React from 'react';
import './WordContainer.css';

export default function WordContainer(props) {

    return (
        <div 
            className="wordContainer"
        >
            {props.children}
        </div>
    )

}
