import React from 'react';
import WordBox from '../@WordBox/WordBox';
import WordContainer from '../WordContainer/WordContainer';
import DraggableWord from '../@DraggableWord/DraggableWord';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { dropWord, resetGame } from '../../actions/wordTypeActions';
import './WordTypes.css';

let totalTime;
let start;
let finish;

export class WordTypes extends React.Component {

    componentWillUnmount() {
        this.props.dispatch(resetGame());
    };


    onDragEnd = result => {
        const { destination, draggableId } = result;
        if (destination.droppableId === draggableId[1]) {
            this.props.dispatch(dropWord(
                result.draggableId[0],
                destination.droppableId,
                'correctType'
            ))

        } else {
            this.props.dispatch(dropWord(
                result.draggableId[0],
                destination.droppableId,
                'incorrectType'
            ))
        }

    };

    render() {

        const words = this.props.words;

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

        const getBoxStyle = (isDraggingOver) => ({
            opacity: isDraggingOver ? 0.5 : 1
        });

        const getWordstyle = (isDragging) => ({
            opacity: isDragging ? 0.5 : 1,
        });

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>

            <div className="game__wrapper">

                <div className="game__screen">
            
                        <p>Drag and drop the words below into the correct box.</p>
                    
                    <div className="wordbox-wrapper">
                    <Droppable droppableId={'Nouns'}>
                        {(provided, snapshot) => (
                            <WordBox
                                innerRef={provided.innerRef} 
                                {...provided.droppableProps}
                                wordType={'Nouns'}
                                correctWords={nouns}
                                color={'Yellow'}
                                isOver={snapshot.isDraggingOver}
                            >
                                {words.filter(word => word.target === 'Nouns').map((word, index) => 
                                    <DraggableWord 
                                        key={index} 
                                        value={word.word} 
                                        index={index}
                                        wordType={word.wordType} 
                                        wordAnswer={word.answer}
                                        style={getWordstyle(snapshot.isDragging)}
                                    />
                                )}
                                {provided.placeholder}
                            </WordBox>
                        )}
                    </Droppable>
                    <Droppable droppableId={'Adjectives'}>
                        {(provided, snapshot) => (
                            <WordBox 
                                innerRef={provided.innerRef} 
                                {...provided.droppableProps} 
                                wordType={'Adjectives'} 
                                correctWords={adjectives} 
                                color={'Red'}
                                isOver={snapshot.isDraggingOver} 
                            >
                                {words.filter(word => word.target === 'Adjectives').map((word, index) => 
                                    <DraggableWord 
                                        key={index} 
                                        value={word.word} 
                                        index={index} 
                                        wordAnswer={word.answer}
                                        wordType={word.wordType} 
                                        style={getWordstyle(snapshot.isDragging)}
                                    />
                                )}
                                {provided.placeholder}
                            </WordBox>

                        )}
                    </Droppable>
                    <Droppable droppableId={'Verbs'}>
                        {(provided, snapshot) => (
                            <WordBox
                                innerRef={provided.innerRef} 
                                {...provided.droppableProps}
                                wordType={'Verbs'} 
                                correctWords={verbs} 
                                color={'Green'}
                                isOver={snapshot.isDraggingOver}
                            >
                                {words.filter(word => word.target === 'Verbs').map((word, index) => 
                                    <DraggableWord 
                                        key={index} 
                                        value={word.word} 
                                        index={index} 
                                        wordType={word.wordType}
                                        wordAnswer={word.answer} 
                                        style={getWordstyle(snapshot.isDragging)}
                                    />
                                )}
                                {provided.placeholder}
                            </WordBox>
                        )}
                    </Droppable>
                    </div>

                    <button className='reset-game' onClick={() => this.props.dispatch(resetGame())}>Reset</button>

                </div>

                <div className="game__controls">
                    {
                        correctWords === words.length
                        ?
                        <p className="wordTypes-message">WELL DONE!! You finished in {totalTime} seconds. <br /> <br /> Reset the game and see if your friend can do it faster.</p>
                        :
                        <Droppable droppableId={'Container'}>
                            {(provided, snapshot) => (
                                <WordContainer
                                    innerRef={provided.innerRef}
                                    {...provided.droppableProps} 
                                    wordType={'Container'}
                                    className="draggables"
                                    style={getBoxStyle(snapshot.isDraggingOver)}
                                >
                                    {words.filter(word => word.target === 'Container').map((word, index) => 
                                        <DraggableWord 
                                            key={index} 
                                            value={word.word} 
                                            index={index} 
                                            wordType={word.wordType}
                                            style={getWordstyle(snapshot.isDragging)}
                                        />
                                    )}
                                    {provided.placeholder}
                                </WordContainer>
                            )}
                        </Droppable>
                            
                    }
                </div>
                
            </div>

            </DragDropContext>
        );

    }
        
};

const mapStateToProps = state => ({
    words: state.wordTypes.words,
    startTime: state.wordTypes.startTime,
    finishTime: state.wordTypes.finishTime
})

export default connect(mapStateToProps)(WordTypes);