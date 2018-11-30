import React from 'react'
import './GameCartridge.css';

export default function GameCartridge(props) {

    const gameSrcName = props.title.split(' ').join('');

    return (
        <div className="cartridge__body">
            <div className="cartridge__image">
                <img src={window.location.origin + "/" + gameSrcName.toLowerCase() + ".png"} alt={"Image of " + props.title} />
            </div>
            <div className="cartridge__title">
                <p>{props.title}</p>
            </div>
        </div>
    )

}