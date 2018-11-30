import React from 'react';
import WordButton from './WordButton';
import './WordContainer.css';

export default function WordContainer(props) {

    const wordButtons = [];

    for (let i = 0; i < props.conjunctions.length; i++) {
        wordButtons.push(
            <li key={i}>
                <WordButton value={props.conjunctions[i]} onClick={props.onClickWord} className="wordButton" />
            </li>
        )
    }

    return (
        <div className="wordContainer">
            <ul className="wordButtons">
                {wordButtons}
            </ul>
        </div>
    )

}
