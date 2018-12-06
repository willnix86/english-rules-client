import React from 'react';
import DraggableWord from '../@DraggableWord/DraggableWord';

import { connect } from 'react-redux';
import { dropWord } from '../../actions/wordTypeActions';
import './WordBox.css';

export class WordBox extends React.Component {

    render() {

        const { wordType, color, isOver, provided, innerRef } = this.props;

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
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            innerRef={provided.innerRef}
                            value={this.props.droppedWords[i].word}
                            wordAnswer={this.props.droppedWords[i].answer}
                            indexValue={i}
                        />
                    </li>
                );
            };
        }

        return (
            <div 
                className={['wordBox', this.props.className].join(' ')} 
                style={fill}
                {...provided.droppableProps}
                ref={innerRef}
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

export default connect(mapStateToProps)(WordBox);