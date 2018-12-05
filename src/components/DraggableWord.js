import React from 'react'
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
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
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class DraggableWord extends React.Component {

    render() {
        const { isDragging, connectDragSource, connectDragPreview, wordAnswer } = this.props;
        let content = (
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

        content = connectDragPreview(content);

        return connectDragSource(
            content
        );
    }

}

export default DragSource(ItemTypes.WORD, wordSource, collect)(DraggableWord);