import React from 'react'
import { reduxForm, Field, focus, reset } from 'redux-form';
import { addUserWords, deleteUserWord, deleteAllUserWords } from '../../actions/wordTypeActions';
import {required, nonEmpty, isTrimmed, correctWordType} from '../../validators';
import Input from '../@SignUpForm/Input';

export class WordTypeForm extends React.Component {
    onSubmit(values) {
        const { word, wordType } = values;
        const userId = localStorage.getItem('userId');
        const authToken = localStorage.getItem('authToken');
        return this.props.dispatch(addUserWords(userId, authToken, word, wordType))
        .then(() => reset())
    }

    handleDeleteWord = (e) => {
        return this.props.dispatch(deleteUserWord(e.target.id));
    }

    handleRestoreWords = () => {
        const userId = localStorage.getItem('userId');
        return this.props.dispatch(deleteAllUserWords(userId));
    }

    render() {
        let wordList;
        if (this.props.words[0].hasOwnProperty('id')) {
            wordList = this.props.words.map((word, index) => <div key={index} className="word">{word.word}<button id={word.id} className="remove" onClick={e => this.handleDeleteWord(e)}> x </button></div>);
        }

        return (
            <div className="WordTypeForm">

                <h3 className="title">Customize WordTypes</h3>
                <button onClick={this.handleRestoreWords} className="restore">Restore Defaults</button>
                
                <form 
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <label htmlFor="word">Word:
                    </label>
                    <p className="example">e.g. Fish</p>
                    <Field
                        name="word"
                        type="text"
                        component={Input}
                        validate={[
                            required, nonEmpty, isTrimmed
                        ]}
                    />
                    <label htmlFor="wordType">Word Type:</label>
                    <p className="example">e.g. Nouns</p>
                    <Field  
                        name="wordType"
                        type="text"
                        component={Input}
                        validate={[
                            required, nonEmpty, isTrimmed, correctWordType
                        ]}
                    />
                    <button 
                        id="submitWord"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                    >
                        Submit Word
                    </button>
                </form>
                <ul className="list">
                    {wordList}
                </ul>
            </div>
        )
    }

}

export default reduxForm({
    form: 'WordTypeForm',
    onSubmitSuccess: (errors, dispatch) =>
        dispatch(reset('WordTypeForm')),
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('WordTypeForm', Object.keys(errors)[0]))
})(WordTypeForm);