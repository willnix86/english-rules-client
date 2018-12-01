import React from 'react'
import './SignUpForm.css';

export function SignUpForm(props) {
    
    return (
        <form>
            <fieldset>
                <legend>
                    GET SETUP!
                </legend>
                <label htmlFor="title">Title:</label>
                <select id="title">
                    <option value="mr">Mr.</option>
                    <option value="miss">Miss.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                    <option value="dr">Dr.</option>
                </select>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" />
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" />
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" />
                <label htmlFor="signup"></label>
                <button id="signup" type="submit" onSubmit={props.onSubmit}>Sign Up</button>
            </fieldset>
        </form>
    )
    
}