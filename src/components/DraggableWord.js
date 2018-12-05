import React from 'react'
import { DragSource } from 'react-dnd';
import './DraggableWord.css';

const ItemTypes = {
    WORD: 'word'
};

const wordSource = {
    beginDrag(props) {
        return {
            word: props.value
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

    render() {
        const { isDragging, connectDragSource, wordAnswer } = this.props;

        return connectDragSource(
            <div 
                className={['draggableWord', wordAnswer].join(' ')}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    cursor: 'move'
                }}
            >
                {this.props.value}
            </div>
        );
    }

}

export default DragSource(ItemTypes.WORD, wordSource, collect)(DraggableWord);