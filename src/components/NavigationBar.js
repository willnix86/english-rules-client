import React from 'react';
import {Link} from 'react-router-dom';
import {LoginControl} from './LoginControl';
import logo from './../assets/er-logo.png';
import './NavigationBar.css';

export function NavigationBar(props) {
    
    return (
        <nav role="navigation">
            <Link to="/"><img className="nav__logo" src={logo} /></Link>
            <LoginControl className="nav__loginControl" />
        </nav>
    )

};