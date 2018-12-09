import React from 'react';
import {Link} from 'react-router-dom';
import './LoginControl.css';

export function LoginControl({className, loggedIn, ...props}) {

    if (loggedIn) {
        return (
            <div className={['logoutForm', className].join(' ')} {...props}>
                    <div>
                        <Link to="/"><button className="home">Home</button></Link>
                        <Link to="/home"><button className="exercises">Exercises</button></Link>
                        <button className="logout" onClick={props.onClick}>Logout</button>
                    </div>
                </div>
        )
    } else {
        return (
            <div className={['loginForm', className].join(' ')} {...props}>
                    <form>
                        <label htmlFor="userName"></label>
                        <input id="userName" type="text" placeholder="Username" />
                        <label htmlFor="userPassword"></label>
                        <input id="userPassword" type="text" placeholder="Password" />
                        <button className="login" onClick={props.onClick}>Login</button>
                    </form>
                </div>
            )
    }

}