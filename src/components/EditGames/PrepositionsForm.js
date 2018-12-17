import React from 'react'
import { reduxForm, Field, focus, reset } from 'redux-form';
import { addUserSentences, deleteUserSentence, deleteAllUserSentences } from '../../actions/prepositionsActions';
import {required, nonEmpty, isTrimmed, underscoresIncluded} from '../../validators';
import Input from '../@SignUpForm/Input';

export class PrepositionsForm extends React.Component {
    onSubmit(values) {
        const { sentence, answer } = values;
        const userId = localStorage.getItem('userId');
        const authToken = localStorage.getItem('authToken');

        return this.props.dispatch(addUserSentences(userId, authToken, sentence, answer))
        .then(() => reset())
    }

    handleDeleteSentence = (e) => {
        return this.props.dispatch(deleteUserSentence(e.target.id));
    }

    handleRestoreSentences = () => {
        const userId = localStorage.getItem('userId');
        return this.props.dispatch(deleteAllUserSentences(userId));
    }

    render() {
        let sentenceList;
        if (this.props.sentences.length > 0 && this.props.sentences[0].hasOwnProperty('id')) {
            sentenceList = this.props.sentences.map((sentence, index) => <div key={index} className="sentence"><p>{sentence.sentence}</p><button id={sentence.id} className="remove" onClick={e => this.handleDeleteSentence(e)}> x </button></div>);
        }
        
        return (
            <div className="PrepositionsForm">
                <h3 className="title">Customize Prepositions</h3>
                <button onClick={this.handleRestoreSentences} className="restore">Restore Defaults</button>
                
                <form 
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <label htmlFor="sentence">Sentence:</label>
                    <p className="example">e.g. I looked _____ at the sky</p>
                    <Field
                        name="sentence"
                        type="text"
                        component={Input}
                        validate={[required, nonEmpty, isTrimmed, underscoresIncluded]}
                    />
                    <label htmlFor="answer">Answer:</label>
                    <p className="example">e.g. up</p>
                    <Field
                        name="answer"
                        type="text"
                        component={Input}
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <button 
                        id="submitSentence"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                    >
                        Submit Sentence
                    </button>
                </form>
                <ul className="list">
                    {sentenceList}
                </ul>
            </div>
        )
    }

}

export default reduxForm({
    form: 'PrepositionsForm',
    onSubmitSuccess: (errors, dispatch) =>
        dispatch(reset('PrepositionsForm')),
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('PrepositionsForm', Object.keys(errors)[0]))
})(PrepositionsForm);