import React from 'react';
import GameCartridge from './GameCartridge';
import './Home.css';

export function Home(props) {

    const gameCartridges = [];

    for (let i = 0; i < props.games.length; i++) {
        gameCartridges.push(
            <li key={i}>
                <GameCartridge title={props.games[i]} />
            </li>
        )
    }

    return (
        <div className='home__wrapper'>
            <header>
                <h1>{props.title} {props.lastName}'s Games Room</h1>
            </header>
            <div className="home__library">
                <ul>
                    {gameCartridges}
                </ul>
            </div>
        </div>
    )

}