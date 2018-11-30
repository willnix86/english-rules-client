import React from 'react';
import {Link} from 'react-router-dom';
import './LoginControl.css';

export function LoginControl({className, loggedIn, ...props}) {

    return (
        <div className={['loginForm', className].join(' ')} {...props}>
            {loggedIn ? (
                <div>
                    <Link to="/home"><button>Library</button></Link>
                    <button onClick={props.onClick}>Logout</button>
                </div>
            ) : (
                <form>
                    <label htmlFor="userName"></label>
                    <input id="userName" type="text" placeholder="Username" />
                    <label htmlFor="userPassword"></label>
                    <input id="userPassword" type="text" placeholder="Password" />
                    <button onClick={props.onClick}>Login</button>
                </form>
                
            )}
        </div>
    )
}