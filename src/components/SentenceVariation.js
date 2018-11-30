import React from 'react';
import WordContainer from './WordContainer';
import MoodImage from './MoodImage'
import './SentenceVariation.css';

export class SentenceVariation extends React.Component {

    state = {
        conjunctions: ['and', 'but', 'or', 'nor', 'for', 'yet', 'so'],
        sentence: '',
        message: '',
        mood: 'talking'
    }

    addWord = (word) => {
        this.setState({
            sentence: (this.state.sentence + " " + word).trim()
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
    
        if (this.state.sentence === "") {
            this.setState({message: `Don't forget to write something!`, mood: 'uhoh'})
            return;
        };

        this.calcCompound();
    };
    
    handleChange = (e) => {
        this.setState({sentence: e});
    }

    calcCompound = () => {
        let conjunctionList = this.state.conjunctions;
        let conjunctions = 0;
        let mood = 'talking';
        let message = '';
        let arrayOfWords = this.state.sentence.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean);

        if (arrayOfWords.length >= 6) {

            for (let i = 0; i < conjunctionList.length; i++) {
                for (let j = 0; j < arrayOfWords.length; j++) {
                    let conjunctionIndex = 0;
                    if (arrayOfWords[j] === conjunctionList[i]) {
                        if ((j - 2) < conjunctionIndex) {
                            mood = 'uhoh';
                            message = 'Uh oh. Make sure you\'re writing a full sentence before using a conjunction.';
                            return this.setState({mood, message});
                        } else {
                            conjunctions++;
                            conjunctionIndex = j;
                        }
                    }
                }
            }
    
            if (conjunctions === 0) {
                mood = 'woops';
                message = `I'm sorry, I don't recognize any of those words. Try using the ones below!`
                return this.setState({mood, message})
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
            message = 'Try to write a sentence with 6 or more words.'
        }

        return this.setState({mood, message});

    }

    render() {

        return (
            <div className="game__wrapper">
                <div className="game__screen">
                    <MoodImage mood={this.state.mood} />
                    <div className="message"><p>{this.state.message}</p></div>
                    {
                        this.state.message !== "" 
                        ?
                        <div></div>
                        :
                        <div className="startText">
                        <p>Type or click on the words below to write a compound sentence.</p>
                        </div>
                    }
                </div>

                <div className="game__controls">
                    <WordContainer conjunctions={this.state.conjunctions} onClickWord={this.addWord}/>
                    <form onSubmit={this.handleSubmit}>
                        <input
                        type="text"
                        value={this.state.sentence}
                        onChange={e => this.setState({ sentence: e.target.value })}
                        />
                        <button type="submit" className="submit">Submit</button>
                    </form>
                </div>
            </div>
        );

    };
    
}