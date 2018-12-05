import React from 'react';
import DraggableWord from './DraggableWord';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { dropWord } from '../actions/wordTypeActions';
import './WordBox.css';

const ItemTypes = {
    WORD: 'word'
};

const wordBoxTarget = {
    drop(props, monitor, component) {
        let wordObj = monitor.getItem();
        let word = wordObj.word;
        let target = props.wordType;

        if (props.correctWords.includes(word)) {
            component.props.dispatch(dropWord(
                word,
                target,
                'correctType'
            ))
        } else {
            component.props.dispatch(dropWord(
                word,
                target,
                'incorrectType'
            ))
        }

    }
} 

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

export class WordBox extends React.Component {

    render() {

        const { wordType, color, connectDropTarget, isOver } = this.props;

        let fill = {};

        if (isOver) {
            fill.opacity = 0.5;
        }

        switch(color.toLowerCase()) {
            case 'yellow':
                fill.backgroundColor = '#F8CE46';
                break;
            case 'green':
                fill.backgroundColor = '#88BC42';
                break;
            case 'red':
                fill.backgroundColor = '#C93B2B';
                break;
            default:
                fill.backgroundColor = 'black';
        }

        let wordList = [];

        if (this.props.droppedWords) {
            for (let i = 0; i < this.props.droppedWords.length; i++) {
                wordList.push(
                    <li key={i}>
                        <DraggableWord 
                            value={this.props.droppedWords[i].word}
                            wordAnswer={this.props.droppedWords[i].answer}
                        />
                    </li>
                );
            };
        }
    
        return connectDropTarget(
            <div 
                className={['wordBox', this.props.className].join(' ')} 
                style={fill}
            >
                <h2>{wordType}</h2>
                <ul>
                    {wordList}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    words: state.wordTypes.words
})

WordBox = DropTarget(ItemTypes.WORD, wordBoxTarget, collect)(WordBox);

export default connect(mapStateToProps)(WordBox);