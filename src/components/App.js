import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {LandingPage, Home, Game, EditGame} from '../components';
import './App.css';

export default function App(props){

    return (
      <Router>
        <div className="App">
          <header>
            <h1><Link to="/">English Rules</Link></h1>
          </header>
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/user/:userId" component={Home} />
            <Route exact path="/game/:gameId" component={Game} />
            <Route exact path="/editGame/:gameId" component={EditGame} />
          </main>
        </div>
      </Router>
    );

}
