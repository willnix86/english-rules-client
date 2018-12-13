import React from 'react';
import {Link} from 'react-router-dom';
import GameCartridge from '..//GameCartridge/GameCartridge';
import './Home.css';

export function Home(props) {
    
    const gameCartridges = [];

    for (let i = 0; i < props.games.length; i++) {
        let link = "/" + props.games[i].split(' ').join('').toLowerCase();
        gameCartridges.push(
            <div key={i} className="home__game">
                <Link to={link}><GameCartridge title={props.games[i]} /></Link>
            </div>
        )
    }

    return (
        <div className="home__library">
            <div className="home__gameslist">
                {gameCartridges}
            </div>
        </div>
    )

}