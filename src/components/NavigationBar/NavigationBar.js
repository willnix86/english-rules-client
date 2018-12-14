import React from 'react';
import {LoginControl} from '../LoginControl/LoginControl';
import './NavigationBar.css';

export function NavigationBar(props) {
    
    return (
        <nav role="navigation">
            <LoginControl className="nav__loginControl" {...props} />
        </nav>
    )

};