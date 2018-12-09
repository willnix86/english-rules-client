import React from 'react';
import HeartContainer from '../HeartContainer/HeartContainer';
import Heart from '../HeartContainer/Heart';
import WordContainer from '../WordContainer/WordContainer';
import WordButton from '../WordButton/WordButton';
import { setSentence, setAnswer, addPoints, loseLife, resetGame } from '../../actions/prepositionsActions';
import './Prepositions.css';
import { connect } from 'react-redux';

let index;
let isDisabled = true;

export class Prepositions extends React.Component {

    startGame() {
        index = 0;
        isDisabled = false;
        this.props.dispatch(setSentence(this.props.sentences[0].sentence));
        this.props.dispatch(setAnswer(this.props.sentences[0].answer));
    };

    loadNextSentence() {

        if (index < this.props.sentences.length - 1) {
            index++;
            this.props.dispatch(setSentence(this.props.sentences[index].sentence));
            this.props.dispatch(setAnswer(this.props.sentences[index].answer));
        } else {
            isDisabled = true;
            this.props.dispatch(setSentence('Congratulations! You scored ' + (this.props.points + 100) + ' points'))
        }

    };

    isAnswerRight(userAnswer) {
        
        if (userAnswer === this.props.currentAnswer) {
            this.props.dispatch(addPoints());
            this.loadNextSentence();

        } else {
            this.props.dispatch(loseLife());
            if (this.props.lives === 1) {
                isDisabled = true;
                this.props.dispatch(setSentence(
                    `Game Over`
                ))
            } else {
                this.loadNextSentence();
            }
        }
        
    };

    handleClick = (word) => {

        this.isAnswerRight(word);
        
    };

    resetGame() {
        index = -1;
        this.props.dispatch(resetGame());
    };
    
    render() {

        let heartsArr = new Array(this.props.lives).fill(<Heart />);

        heartsArr.push(null);
        
        return (
            <div className="game__wrapper">
            
                <div className="game__screen">
                    <div className="game__points">
                        {this.props.points}
                    </div>
                    <HeartContainer>
                        {heartsArr.map((heart, index) => (
                            <div className="heart" key={index}>{heart}</div>
                        ))}
                    </HeartContainer>
                    <p className="game__sentence">{this.props.currentSentence}</p>
                </div>

                <div className="game__controls">
                    {
                        index >= 0
                        ?
                            <button className='reset-game' onClick={() => this.resetGame()}>Reset</button>
                        :
                            <button className='game__start' onClick={() => this.startGame()}
                            >Start</button>
                    }
                    <WordContainer>
                        {this.props.prepositions.map((word, index) => 
                            <WordButton 
                                key={index} 
                                onClick={this.handleClick}
                                className="wordButton"
                                value={word}
                                disabled={isDisabled}
                            />
                        )}
                    </WordContainer>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    prepositions: state.prepositions.prepositions.sort(() => 0.5 - Math.random()),
    sentences: state.prepositions.sentences,
    currentSentence: state.prepositions.currentSentence,
    currentAnswer: state.prepositions.currentAnswer,
    lives: state.prepositions.lives,
    points: state.prepositions.points
})

export default connect(mapStateToProps)(Prepositions);