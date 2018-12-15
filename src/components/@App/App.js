import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {NavigationBar} from '../NavigationBar/NavigationBar';
import {LandingPage} from '../LandingPage/LandingPage';
import {Home} from '../Home/Home';
import Conjunctions from '../@Conjunctions/Conjunctions';
import WordTypes from '../@WordTypes/WordTypes';
import Prepositions from '../@Prepositions/Prepositions';
import {Footer} from '../Footer/Footer';
import EditGames from '../EditGames/EditGames';

import './App.css';

const HomeRoute = (props) => (
  <Route path="/home" render={() => (
    props.loggedIn ? 
      ( <Home {...props} /> ) 
    :
      ( <Redirect to="/" />)
  )} 
  />
);

const ConjunctionsRoute = (props) => (
  <Route path="/conjunctions" render={() => (
    props.loggedIn ? 
      ( <Conjunctions {...props} /> ) 
    :
      ( <Redirect to="/" />)
  )} 
  />
);

const WordTypesRoute = (props) => (
  <Route path="/wordtypes" render={() => (
    props.loggedIn ? 
      ( <WordTypes {...props} /> ) 
    :
      ( <Redirect to="/" />)
  )} 
  />
);

const PrepositionsRoute = (props) => (
  <Route path="/prepositions" render={() => (
    props.loggedIn ? 
      ( <Prepositions {...props} /> ) 
    :
      ( <Redirect to="/" />)
  )} 
  />
);

const EditGamesRoute = (props) => (
  <Route path="/editgames" render={() => (
    props.loggedIn ? 
      ( <EditGames {...props} /> ) 
    :
      ( <Redirect to="/" />)
  )} 
  />
);

export class App extends React.Component {

  render() {

    return (
      <Router>
        <div id="#App" className="App">
          <NavigationBar loggedIn={this.props.loggedIn} {...this.props} />
          <main>
            <Route exact path="/" 
              component={LandingPage} 
              props={this.props}
            />
            <HomeRoute {...this.props} />
            <ConjunctionsRoute {...this.props} />
            <WordTypesRoute {...this.props} />
            <PrepositionsRoute {...this.props} />
            <EditGamesRoute {...this.props} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
  
}

const mapStateToProps = state => ({
  username: state.user.username,
  hasAuthToken: state.user.authToken !== null,
  games: state.user.games,
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(App);