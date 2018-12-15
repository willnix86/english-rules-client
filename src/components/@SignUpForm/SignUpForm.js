import React from 'react'
import { registerUser } from '../../actions/userActions';
import { getJWT } from '../../actions/auth';
import { reduxForm, Field, focus, reset } from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import Input from './Input';
import { connect } from 'react-redux';
import './SignUpForm.css';


const passwordLength = length({min: 8, max: 72});
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {
    onSubmit(values) {
        const { firstName, lastName, password } = values;
        const username = values.email;
        const user = {firstName, lastName, username, password};

        return this.props.dispatch(registerUser(user))
        .then(res => this.props.dispatch(getJWT(username, password)))
        .then(() => reset())
    }

    render() {
        return (
            <>
            <h3>Start Here</h3>
            {
                this.props.errors
                ?
                <p className="form-error form-error-large">{this.props.errors}</p>
                :
                null
            }
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First Name:</label>
                <Field 
                    name="firstName"
                    type="text" 
                    component={Input}
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="lastName">Last Name:</label>
                <Field 
                    name="lastName"
                    type="text"
                    component={Input}
                    validate={[required, nonEmpty, isTrimmed]}
                />
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

const mapStateToProps = state => ({
    errors: state.user.error
})

SignUpForm = reduxForm({
    form: 'signUp',
    onSubmitSuccess: (errors, dispatch) =>
        dispatch(reset('signUp')),
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signUp', Object.keys(errors)[0]))
})(SignUpForm);

export default connect(mapStateToProps)(SignUpForm);