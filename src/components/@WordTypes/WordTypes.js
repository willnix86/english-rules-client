import React from 'react';
import WordBox from '../@WordBox/WordBox';
import WordContainer from '../WordContainer/WordContainer';
import DraggableWord from '../@DraggableWord/DraggableWord';
import { DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend';
import MultiBackend, { TouchTransition, createTransition, Preview } from 'react-dnd-multi-backend';
import { connect } from 'react-redux';
import DragScroll from 'react-dragscroll';
import Modal from 'react-modal';
import { toggleModal } from '../../actions/userActions';
import { dropWord, resetGame } from '../../actions/wordTypeActions';
import './WordTypes.css';

let totalTime;
let start;
let finish;
let allyWordChoice;
let allyWordType;
let allyTypeChoice;

const MouseTransition = createTransition('mousedown', (e) => {
    return e.type
        && e.type.indexOf('touch') === -1
        && e.type.indexOf('mouse') !== -1;
});

const HTML5toTouch = {
    backends: [
        {
            backend: HTML5Backend,
            transition: MouseTransition
        },
        {
            backend: TouchBackend({ enableMouseEvents: false }),
            preview: true,
            transition: TouchTransition
        },
        {
            backend: HTML5Backend,
            transition: MouseTransition
        }
    ],
};

const modalStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor : '#3683cf',
    }
};

export class WordTypes extends React.Component {

    componentWillUnmount() {
        this.props.dispatch(resetGame());
    };

    generatePreview(type, item, style) {
        Object.assign(style, {...item.style});
        return <div className={item.className} style={style}>{item.word}</div>;
    }

    handleClickOnWord = (word, type) => {
        allyWordChoice = word;
        allyWordType = type;
        this.props.dispatch(toggleModal(true));
    }

    handleClickOnType = (e) => {
        allyTypeChoice = e.target.value;
        console.log(allyWordType, allyTypeChoice);
        if (allyWordType === allyTypeChoice) {
            this.props.dispatch(dropWord(
                allyWordChoice,
                allyTypeChoice,
                'correctType'
            ))
        } else {
            this.props.dispatch(dropWord(
                allyWordChoice,
                allyTypeChoice,
                'incorrectType'
            ))
        }
        this.props.dispatch(toggleModal(false));
    }

    onCloseModal = () => {
        this.props.dispatch(toggleModal(false));
    }

    render() {

        const words = this.props.words.sort(() => 0.5 - Math.random());

        const incorrectWords = words.filter(word => word.answer === 'incorrectType').length;

        const correctWords = words.filter(word => word.answer === 'correctType').length;

        const nouns = words.filter(word => word.wordType ==='Nouns').map(word => word.word);

        const adjectives = words.filter(word => word.wordType ==='Adjectives').map(word => word.word);

        const verbs = words.filter(word => word.wordType ==='Verbs').map(word => word.word);

        if ((correctWords === 1 && incorrectWords === 0) || (incorrectWords === 1 && correctWords === 0)) {
            start = Date.now();
        }

        if(correctWords === words.length) {
            finish = (Date.now() - start);
            totalTime = Math.floor(finish / 1000);
        }

        return (
            <DragScroll>

                <div className="game__wrapper">

                    <div className="game__screen">
            
                        <p>Drag and drop the words below into the correct box.</p>
                        <span id="operation" className='assistive-text'>
                            Use the spacebar to select a word and wordtype to place it in.
                        </span>
                    
                        <div className="wordbox-wrapper">
                            <WordBox 
                                wordType={'Nouns'}
                                correctWords={nouns}
                                color={'Yellow'}
                            >
                                {words.filter(word => word.target === 'Nouns').map((word, index) => 
                                    <DraggableWord 
                                        key={index} 
                                        wordType={word.wordType} 
                                        wordAnswer={word.answer}
                                        value={word.word}
                                        onClick={this.handleClickOnWord}
                                    />
                                )}
                            </WordBox>
                            <WordBox 
                                wordType={'Adjectives'} 
                                correctWords={adjectives} 
                                color={'Red'} 
                            >
                                {words.filter(word => word.target === 'Adjectives').map((word, index) => 
                                    <DraggableWord 
                                        key={index} 
                                        wordType={word.wordType} 
                                        wordAnswer={word.answer}
                                        value={word.word}
                                        onClick={this.handleClickOnWord}
                                    />
                                )}
                            </WordBox>
                            <WordBox 
                                wordType={'Verbs'} 
                                correctWords={verbs} 
                                color={'Green'}
                                >
                                {words.filter(word => word.target === 'Verbs').map((word, index) => 
                                    <DraggableWord 
                                        key={index} 
                                        wordType={word.wordType} 
                                        wordAnswer={word.answer}
                                        value={word.word}
                                        onClick={this.handleClickOnWord}
                                    />
                                )}
                            </WordBox>
                        </div>

                        <button className='reset-game' onClick={() => this.props.dispatch(resetGame())}>Reset</button>
                    </div>

                    <div className="game__controls">
                        <Preview generator={this.generatePreview} />
                    {
                        correctWords === words.length
                        ?
                        <p className="wordTypes-message">WELL DONE!! You finished in {totalTime} seconds. <br /> <br /> Reset the game and see if your friend can do it faster.</p>
                        :
                        <WordContainer 
                        wordType={'Container'}
                        className="draggables" 
                        >
                            {words.filter(word => word.target === 'Container').map((word, index) => 
                                <DraggableWord 
                                    key={index} 
                                    wordType={word.wordType}
                                    value={word.word}
                                    onClick={this.handleClickOnWord}
                                />
                            )}
                        </WordContainer>
                    }
                    </div>
                    <Modal
                        isOpen={this.props.isModalOpen}
                        onRequestClose={this.closeModal}
                        style={modalStyles}
                    >
                        <button 
                            className="closeModal"
                            onClick={this.onCloseModal}
                        >
                            Close
                        </button>
                        <p className="modal-message">{allyWordChoice}</p>
                        <p className="modal-message">Pick a Word Type:</p>
                        <button 
                            className="wordType"
                            onClick={e => this.handleClickOnType(e)}
                            value={'Nouns'}
                        >
                            Nouns
                        </button>
                        <button 
                            className="wordType"
                            onClick={this.handleClickOnType}
                            value={'Adjectives'}
                        >
                            Adjectives
                        </button>
                        <button 
                            className="wordType"
                            onClick={this.handleClickOnType}
                            value={'Verbs'}
                        >
                            Verbs
                        </button>
                    </Modal>
                </div>

            </DragScroll>
        );

    }
        
};

const mapStateToProps = state => ({
    words: state.wordTypes.words,
    startTime: state.wordTypes.startTime,
    finishTime: state.wordTypes.finishTime,
    isModalOpen: state.user.isModalOpen
})

WordTypes = DragDropContext(MultiBackend(HTML5toTouch))(WordTypes);

export default connect(mapStateToProps)(WordTypes);