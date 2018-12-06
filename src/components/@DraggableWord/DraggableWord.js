import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import './DraggableWord.css';
export default class DraggableWord extends React.Component {

    render() {
        const { index, value, wordAnswer, wordType } = this.props;
        return (
            <Draggable key={index} draggableId={[value, wordType]} index={index}>
                {provided => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={['draggableWord', wordAnswer].join(' ')}
                    style={this.props.style}
                >
                    {value}
                </div>
                )}
            </Draggable>
            
        )
    }
}