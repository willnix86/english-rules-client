import React from 'react'
import './GameCartridge.css';

export default function GameCartridge(props) {

    const gameSrcName = props.title.split(' ').join('').toLowerCase();

    return (
        <div className="cartridge__body">
            <div className="cartridge__image">
                <img src={window.location.origin + "/" + gameSrcName + ".png"} alt={"Image of " + props.title} />
            </div>
            <div className="cartridge__title">
                <p>{props.title}</p>
                {
                    props.title === 'Word Types'
                    ?
                    <p className="cartridge__subtitle">(Desktops Only)</p>
                    :
                    <p></p>
                }
            </div>
        </div>
    )

}