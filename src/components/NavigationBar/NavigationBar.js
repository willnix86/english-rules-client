import React from 'react';
import {Link} from 'react-router-dom';
import {LoginControl} from '../LoginControl/LoginControl';
import './NavigationBar.css';

export function NavigationBar(props) {
    
    return (
        <nav role="navigation">
            <Link to="/"><img className="nav__logo" src={window.location.origin + "/er-logo.png"} alt="English Rules Logo" /></Link>
            <LoginControl className="nav__loginControl" {...props} />
        </nav>
    )

};