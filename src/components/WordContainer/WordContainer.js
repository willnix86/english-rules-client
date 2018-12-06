import React from 'react';
import './WordContainer.css';

export default function WordContainer(props) {

    return (
        <div 
            className="wordContainer"
            ref={props.innerRef}
            style={props.style}
        >
            {props.children}
        </div>
    )

}
