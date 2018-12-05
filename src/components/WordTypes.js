import React from 'react';
import WordBox from './WordBox';
import WordContainer from './WordContainer';
import { DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import { connect } from 'react-redux';
import { resetGame } from '../actions/wordTypeActions';
import './WordTypes.css';

let totalTime;
let start;
let finish;

export class WordTypes extends React.Component {

    componentWillUnmount() {
        this.props.dispatch(resetGame());
    };

    render() {

        const words = this.props.words.sort(() => 0.5 - Math.random());

        const incorrectWords = words.filter(word => word.answer === 'incorrectType').length;

        const correctWords = words.filter(word => word.answer === 'correctType').length;

        const nouns = words.filter(word => word.wordType ==='noun').map(word => word.word);

        const adjectives = words.filter(word => word.wordType ==='adjective').map(word => word.word);

        const verbs = words.filter(word => word.wordType ==='verb').map(word => word.word);

        if ((correctWords === 1 && incorrectWords === 0) || (incorrectWords === 1 && correctWords === 0)) {
            start = Date.now();
        }

        if(correctWords === words.length) {
            finish = (Date.now() - start);
            totalTime = Math.floor(finish / 1000);
        }

        return (
            <div className="game__wrapper">
                <div className="game__screen">
            
                        <p>Drag and drop the words below into the correct box.</p>
                    
                    <div className="wordbox-wrapper">
                        <WordBox 
                            wordType={'Nouns'}
                            correctWords={nouns}
                            color={'Yellow'}
                            droppedWords={words.filter(word => word.target ==='Nouns')}
                        />
                        <WordBox 
                            wordType={'Adjectives'} 
                            correctWords={adjectives} 
                            color={'Red'} 
                            droppedWords={words.filter(word => word.target ==='Adjectives')}
                        />
                        <WordBox 
                            wordType={'Verbs'} 
                            correctWords={verbs} 
                            color={'Green'}
                            droppedWords={words.filter(word => word.target ==='Verbs')}
                        />
                    </div>

                    <button className='reset-game' onClick={() => this.props.dispatch(resetGame())}>Reset</button>
                </div>
                <div className="game__controls">
                    {
                        correctWords === words.length
                        ?
                        <p className="wordTypes-message">WELL DONE!! You finished in {totalTime} seconds. <br /> <br /> Reset the game and see if your friend can do it faster.</p>
                        :
                        <WordContainer 
                        wordType={'Container'}
                        words={words.filter(word => word.target === 'Container')}
                        className="draggables" 
                        />
                    }
                </div>
            </div>
        );

    }
        
};

const mapStateToProps = state => ({
    words: state.wordTypes.words,
    startTime: state.wordTypes.startTime,
    finishTime: state.wordTypes.finishTime
})

WordTypes = DragDropContext(HTML5Backend)(WordTypes);

export default connect(mapStateToProps)(WordTypes);