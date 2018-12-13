import React from 'react';
import {Link} from 'react-router-dom';
import { getJWT } from '../../actions/auth';
import { userLogout } from '../../actions/userActions';
import { reduxForm, Field, focus, reset} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import Input from '../SignUpForm/Input';
import { connect } from 'react-redux';
import './LoginControl.css';


export class LoginControl extends React.Component {
    onSubmit(values) {
        const { loginUsername, loginPassword } = values;
        return this.props.dispatch(getJWT(loginUsername, loginPassword))
    }

    onClickLogout = () => {
        this.props.dispatch(userLogout());
        localStorage.clear();
    }

    render() {

        if (this.props.loggedIn === true) {
            return (
                <div className={'logoutForm'}>
                    <Link to="/" className="home">Home</Link>
                    <Link to="/home" className="exercises">Exercises</Link>
                    <a href="#" className="logout" onClick={this.onClickLogout}>Logout</a>
                </div>
            )
        } else {
            return (
                <form
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                    className={'loginForm'}
                >
                    <Field
                        name="loginUsername" 
                        type="text" 
                        placeholder="Username"
                        component={Input}
                        validate={[required, nonEmpty]}
                    />
                    <Field
                        name="loginPassword" 
                        type="password" 
                        placeholder="Password"
                        component={Input}
                        validate={[required, nonEmpty]}
                    />
                    <button 
                        id="login"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                    >
                        Login
                    </button>
                </form>
            )
        }
    }

}

LoginControl = reduxForm({
    form: 'logIn',
    onSubmitSuccess: (errors, dispatch) =>
        dispatch(reset('logIn')),
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('logIn', Object.keys(errors)[0]))
})(LoginControl);

export default connect()(LoginControl);