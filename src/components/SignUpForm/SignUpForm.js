import React from 'react'
import { registerUser } from '../../actions/userActions';
import { userLogin } from '../../actions/auth';
import { reduxForm, Field, focus } from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import Input from './Input';

import './SignUpForm.css';

const passwordLength = length({min: 8, max: 72});
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {
    onSubmit(values) {
        const { firstName, lastName, password } = values;
        const username = values.email;
        const user = {firstName, lastName, username, password};
        
        const signupLogin = async () => {
            await this.props.dispatch(registerUser(user));
            await this.props.dispatch(userLogin(username, password));
        }

        return signupLogin();
        
    }

    render() {
        return (
            <>
            <h3>Sign Up!</h3>

            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First Name:</label>
                <Field name="firstName" itype="text" component={Input} />
                <label htmlFor="lastName">Last Name:</label>
                <Field name="lastName" type="text" component={Input} />
                <label htmlFor="email">Email:</label>
                <Field 
                    name="email" 
                    type="email" component={Input}
                    validate={[required, nonEmpty, isTrimmed]} 
                />
                <label htmlFor="password">Password:</label>
                <Field 
                    name="password" type="password" component={Input} 
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="confirmPassword"> Confirm Password:</label>
                <Field 
                    name="confirmPassword" type="password" component={Input}
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button 
                    id="signup"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}
                >
                    Sign Up
                </button>
            </form>
            </>
        )
    }
    
}

export default reduxForm({
    form: 'signUp',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signUp', Object.keys(errors)[0]))
})(SignUpForm);