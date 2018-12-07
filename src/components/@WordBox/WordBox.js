import React from 'react';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { dropWord } from '../../actions/wordTypeActions';
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
                fill.outlineColor = '#fce6a6';
                break;
            case 'green':
                fill.backgroundColor = '#88BC42';
                fill.outlineColor = '#e3ffbc';
                break;
            case 'red':
                fill.backgroundColor = '#C93B2B';
                fill.outlineColor = '#C93A2B';
                break;
            default:
                fill.backgroundColor = 'black';
        }
    
        return connectDropTarget(
            <div 
                className={['wordBox', this.props.className].join(' ')} 
                style={fill}
            >
                <h2>{wordType}</h2>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    words: state.wordTypes.words
})

WordBox = DropTarget(ItemTypes.WORD, wordBoxTarget, collect)(WordBox);

export default connect(mapStateToProps)(WordBox);