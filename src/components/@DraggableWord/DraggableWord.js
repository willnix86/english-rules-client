import React from 'react'
import { DragSource } from 'react-dnd';
import './DraggableWord.css';

const ItemTypes = {
    WORD: 'word'
};

const wordSource = {
    beginDrag(props) {
        return {
            word: props.value,
            style: {
                width: '100px',
                margin: '15px 3px 0 3px',
                fontSize: 'calc(13px + 1vmin)',
                fontWeight: 'normal',
                fontFamily: '"Open Sans", sans-serif',
                padding: '10px 35px',
                color: 'black',
                borderRadius: '5px',
                backgroundColor:  'white',
                opacity: '0.5'
            },
            className: props.answer
        };
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class DraggableWord extends React.Component {

    handleClick = () => {
        this.props.onClick(this.props.value, this.props.wordType);
    }

    render() {
        const { isDragging, connectDragSource, wordAnswer } = this.props;

        return connectDragSource(
            <button 
                className={['draggableWord', wordAnswer].join(' ')}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    cursor: 'move'
                }}
                tabIndex='0'
                draggable='true'
                aria-describedby='operation'
                onClick={this.handleClick}
            >
                {this.props.value}
            </button>
        );
    }

}

export default DragSource(ItemTypes.WORD, wordSource, collect)(DraggableWord);