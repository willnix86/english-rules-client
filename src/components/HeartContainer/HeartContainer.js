import React from 'react';
import './HeartContainer.css';

export default function HeartContainer(props) {

    return (
        <div className='game__lives'>
            {props.children}
        </div>
    )
}