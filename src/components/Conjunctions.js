import React from 'react';
import WordContainer from './WordContainer';
import MoodImage from './MoodImage'
import './Conjunctions.css';
import { connect } from 'react-redux';
import store from '../store';
import { updateSentence, showResponse } from '../actions/conjunctionsActions';

export class Conjunctions extends React.Component {

    addWord = (word) => {
        this.props.dispatch(updateSentence((this.props.sentence + " " + word).trim()))
    };

    handleSubmit = (e) => {
        e.preventDefault();
    
        if (this.props.sentence === "") {
            let message = 'Don\'t forget to write something!';
            let mood = 'uhoh';
            this.props.dispatch(showResponse(message, mood));
            return;
        };

        this.calcCompound();
    };
    
    handleChange = (e) => {
        this.props.dispatch(updateSentence(e));
    }

    calcCompound = () => {
        let conjunctionList = this.props.conjunctions;
        let conjunctions = 0;
        let mood = 'talking';
        let message = '';
        let arrayOfWords = this.props.sentence.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean);

        if (arrayOfWords.length >= 5) {  

            for (let i = 0; i < arrayOfWords.length; i++) {

                let conjunctionIndex = 0;

                if (conjunctionList.includes(arrayOfWords[i])) {

                    if (i < 2) {
                        mood = 'uhoh';
                        message = 'Uh oh. Make sure you\'re writing a full sentence before using a conjunction.';
                        return this.props.dispatch(showResponse(message, mood));
                    }

                    if (conjunctionList.includes(arrayOfWords[i-1])) {
                        conjunctionIndex = i;
                    } else {
                        conjunctions++;
                        conjunctionIndex = i;
                    }

                }
                
            }
            
            if (conjunctions === 0) {
                mood = 'woops';
                message = `I'm sorry, I don't recognize any of those words. Try using the ones below!`
                return this.props.dispatch(showResponse(message, mood));
            };
        
            // Change mood depending on how many conjunctions were used
            if (conjunctions >= 2) {
                mood = 'happy';
                message = 'WOW, that\'s amazing. What an incredible job! Why don\'t you write another one?';
            } else if (conjunctions === 1) {
                mood = 'happyish';
                message = 'Well done, you formed a compound sentence! Can you write a longer one with more conjunctions?';
            }
        } else {
            mood = 'woops';
            message = 'Try to write a sentence with 5 or more words.'
        }

        return this.props.dispatch(showResponse(message, mood));

    }

    render() {

        return (
            <div className="game__wrapper">
                <div className="game__screen">
                    <MoodImage mood={this.props.mood} />
                    <div className="message"><p>{this.props.message}</p></div>
                    {
                        this.props.message !== "" 
                        ?
                        <div></div>
                        :
                        <div className="startText">
                        <p>Type or click on the words below to write a compound sentence.</p>
                        </div>
                    }
                </div>

                <div className="game__controls">
                    <WordContainer conjunctions={this.props.conjunctions} onClickWord={this.addWord}/>
                    <form onSubmit={this.handleSubmit}>
                        <input
                        type="text"
                        value={this.props.sentence}
                        onChange={e => this.handleChange(e.target.value)}
                        />
                        <button type="submit" className="submit">Submit</button>
                    </form>
                </div>
            </div>
        );

    };
    
}

const mapStateToProps = state => ({
    conjunctions: state.conjunctions.conjunctions,
    sentence: state.conjunctions.sentence,
    message: state.conjunctions.message,
    mood: state.conjunctions.mood
})

export default connect(mapStateToProps)(Conjunctions);