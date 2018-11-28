import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavigationBar} from './NavigationBar';
import {LandingPage} from './LandingPage';
import {Footer} from './Footer';
import './App.css';

export default function App(props){

    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <main>
            <Route exact path="/" component={LandingPage} />
          {
             /*
            <Route exact path="/user/:userId" component={Home} />
            <Route exact path="/game/:gameId" component={Game} />
            <Route exact path="/editGame/:gameId" component={EditGame} />
             */
          } 
          </main>
          <Footer />
        </div>
      </Router>
    );

}
