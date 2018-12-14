import React from 'react'
import { reduxForm, Field, focus, reset } from 'redux-form';
import { addUserSentences } from '../../actions/prepositionsActions';
import {required, nonEmpty, isTrimmed, underscoresIncluded} from '../../validators';
import Input from '../SignUpForm/Input';

export class PrepositionsForm extends React.Component {
    onSubmit(values) {
        const { sentence, answer } = values;
        const userId = sessionStorage.getItem('userId');
        const authToken = sessionStorage.getItem('authToken');

        return this.props.dispatch(addUserSentences(userId, authToken, sentence, answer))
        .then(() => reset())
    }

    render() {
        return (
            <div className="PrepositionsForm">
                <h3 className="title">Customize Prepositions</h3>
                <p className="example">e.g I looked _____ at the sky / up</p>
                <form 
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <label htmlFor="sentence">Sentence:</label>
                    <Field
                        name="sentence"
                        type="text"
                        component={Input}
                        validate={[required, nonEmpty, isTrimmed, underscoresIncluded]}
                    />
                    <label htmlFor="answer">Answer:</label>
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
                        Submit New Sentence
                    </button>
                </form>
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