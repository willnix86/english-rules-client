import React from 'react';
import WordButton from './wordButton';
import './wordContainer.css';

export default function WordContainer(props) {

    const happyButtons = [];
    const sadButtons = [];

    for (let i = 0; i < props.happyWords.length; i++) {
        happyButtons.push(
            <li key={i}>
                <WordButton value={props.happyWords[i]} onClick={props.onClickWord} className="happyButton" />
            </li>
        )
    }

    for (let i = 0; i < props.sadWords.length; i++) {
        sadButtons.push(
            <li key={i}>
                <WordButton value={props.sadWords[i]} onClick={props.onClickWord} className="sadButton" />
            </li>
        )
    }

    return (
        <div className="wordContainer">
            <ul className="wordButtons">
                {happyButtons}
            </ul>
            <ul className="wordButtons">
                {sadButtons}
            </ul>
        </div>
    )

}
