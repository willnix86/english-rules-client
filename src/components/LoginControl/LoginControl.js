import React from 'react';
import {Link} from 'react-router-dom';
import { getJWT } from '../../actions/auth';
import { userLogout } from '../../actions/userActions';
import { reduxForm, Field, focus, reset} from 'redux-form';
import Input from '../@SignUpForm/Input';
import { connect } from 'react-redux';
import './LoginControl.css';

export class LoginControl extends React.Component {
    onSubmit(values) {
        const { loginUsername, loginPassword } = values;
        return this.props.dispatch(getJWT(loginUsername, loginPassword))
    }

    onClickDemo = (e) => {
        e.preventDefault();
        const user = 'tess.ting@gmail.com';
        const pass = 'Password';
        return this.props.dispatch(getJWT(user, pass))
            .then(res => this.forceUpdate());
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
                    <button className="logout" onClick={this.onClickLogout}>Logout</button>
                </div>
            )
        } else {
            return (
                <div className="form__wrapper">
                    <form
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                        className={'loginForm'}
                    >
                        <Field
                            name="loginUsername" 
                            type="text" 
                            placeholder="Username"
                            component={Input}
                        />
                        <Field
                            name="loginPassword" 
                            type="password" 
                            placeholder="Password"
                            component={Input}
                        />
                        <button 
                            id="login"
                            type="submit"
                            disabled={this.props.pristine || this.props.submitting}
                        >
                            Login
                        </button>
                        <button
                            id="demo"
                            onClick={e => this.onClickDemo(e)}
                        >
                            Demo
                        </button>
                    </form>
                    {
                        this.props.error
                        ?
                        <p className="errorMessage">{this.props.error}</p>
                        :
                        null
                    }
                    
                </div>
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