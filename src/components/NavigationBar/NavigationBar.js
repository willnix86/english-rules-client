import React from 'react';
import {LoginControl} from '../@LoginControl/LoginControl';
import './NavigationBar.css';

export function NavigationBar(props) {
    
    return (
        <nav role="navigation">
            <img src={window.location.origin + "/er-logo.png"} className={"nav__logo"} alt={"English Rules Logo"} />
            <LoginControl className="nav__loginControl" {...props} />
        </nav>
    )

};