import React from 'react';
import './LoginControl.css';

export function LoginControl({className, loggedIn, ...props}) {

    return (
        <div className={['loginForm', className].join(' ')} {...props}>
            {loggedIn ? (
                <button onClick={props.onClick}>Logout</button>
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