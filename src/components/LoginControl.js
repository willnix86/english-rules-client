import React from 'react';
import {Link} from 'react-router-dom';
import './LoginControl.css';

export function LoginControl({className, loggedIn, ...props}) {

    if (loggedIn) {
        return (
            <div className={['logoutForm', className].join(' ')} {...props}>
                    <div>
                        <Link to="/home"><button>Library</button></Link>
                        <button onClick={props.onClick}>Logout</button>
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
                        <button onClick={props.onClick}>Login</button>
                    </form>
                </div>
            )
    }

}