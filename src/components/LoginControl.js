import React from 'react'

export function LoginControl(props) {

    const isLoggedIn = props.isLoggedIn;

    return (
        <div className={props.className}>
            {isLoggedIn ? (
                <button onClick={props.onClick}>Logout</button>
            ) : (
                <button onClick={props.onClick}>Login</button>
            )}
        </div>
    )
}