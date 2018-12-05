import React from 'react';
import WordButton from '../WordButton/WordButton';
import DraggableWord from '../@DraggableWord/DraggableWord';
import './WordContainer.css';

export default function WordContainer(props) {

    const wordButtons = [];

    const draggableWords = [];

    if (props.className === 'buttons') {
        for (let i = 0; i < props.words.length; i++) {
            wordButtons.push(
                <li key={i}>
                    <WordButton 
                        value={props.words[i]} 
                        onClick={props.onClickWord} 
                        className="wordButton" 
                    />
                </li>
            )
        }
    } else if (props.className === 'draggables') {
        for (let i = 0; i < props.words.length; i++) {
            draggableWords.push(
                <li key={i}>
                    <DraggableWord 
                        value={props.words[i].word}
                        className="draggableWord" 
                    />
                </li>
            )
        }
    }

    return (
        <div className="wordContainer">
            <ul className="wordButtons">
                {wordButtons}
                {draggableWords}
            </ul>
        </div>
    )

}
