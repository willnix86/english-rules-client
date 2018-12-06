import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import './DraggableWord.css';
export default class DraggableWord extends React.Component {

    render() {
        const { isDragging, wordAnswer, value, indexValue } = this.props;

        return (
            <Draggable draggableId={value} index={indexValue}>
                {provided => (
                    <div 
                        className={['draggableWord', wordAnswer].join(' ')}
                        style={{
                            opacity: isDragging ? 0.5 : 1,
                            cursor: 'move'
                        }}
                        innerref={provided.innerRef}
                    >
                        {value}
                    </div>
                )}
            </Draggable>
        )
    }
}