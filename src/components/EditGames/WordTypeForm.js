import React from 'react'
import { reduxForm, Field, focus, reset } from 'redux-form';
import { addUserWords } from '../../actions/wordTypeActions';
import {required, nonEmpty, isTrimmed, correctWordType} from '../../validators';
import Input from '../SignUpForm/Input';

export class WordTypeForm extends React.Component {
    onSubmit(values) {
        const { word, wordType } = values;
        const userId = sessionStorage.getItem('userId');
        const authToken = sessionStorage.getItem('authToken');

        return this.props.dispatch(addUserWords(userId, authToken, word, wordType))
        .then(() => reset())
    }

    render() {
        return (
            <div className="WordTypeForm">
                <h3 className="title">Customize WordTypes</h3>
                <p className="example">e.g Fish / Nouns</p>
                <form 
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <label htmlFor="word">Word:
                    </label>
                    <Field
                        name="word"
                        type="text"
                        component={Input}
                        validate={[
                            required, nonEmpty, isTrimmed
                        ]}
                    />
                    <label htmlFor="wordType">Word Type:</label>
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
                        Submit New Word
                    </button>
                </form>
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