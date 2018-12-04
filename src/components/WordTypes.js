import React from 'react';
import WordBox from './WordBox';
import WordContainer from './WordContainer';
import { DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import { connect } from 'react-redux';
import { resetGame } from '../actions/wordTypeActions';
import './WordTypes.css';

export class WordTypes extends React.Component {

    componentWillUnmount() {
        this.props.dispatch(resetGame());
    };

    render() {

        const words = this.props.words;

        const nouns = words.filter(word => word.wordType ==='noun').map(word => word.word);

        const adjectives = words.filter(word => word.wordType ==='adjective').map(word => word.word);

        const verbs = words.filter(word => word.wordType ==='verb').map(word => word.word);

        return (
            <div className="game__wrapper">
                <div className="game__screen">
                    <p>Drag and drop the words below into the correct box</p>
                    
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

                    <button class='reset-game' onClick={() => this.props.dispatch(resetGame())}>Reset</button>
                </div>
                <div className="game__controls">
                    <WordContainer 
                        wordType={'Container'}
                        words={words.filter(word => word.target === 'Container')}
                        className="draggables" 
                    />
                </div>
            </div>
        );

    }
        
};

const mapStateToProps = state => ({
    words: state.wordTypes.words
})

WordTypes = DragDropContext(HTML5Backend)(WordTypes);

export default connect(mapStateToProps)(WordTypes);