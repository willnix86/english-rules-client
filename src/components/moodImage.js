import React from 'react';
import './moodImage.css';

export default function MoodImage(props) {

    if (props.mood !== "") {

        return(
            <img className="moodImg" src={window.location.origin + "/" + props.mood + ".png"} alt={props.mood + " face"} />
        )

    } else {
        return null;
    }
    
}