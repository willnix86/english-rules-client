import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {NavigationBar} from './NavigationBar';
import {LandingPage} from './LandingPage';
import {Home} from './Home';
import Conjunctions from './Conjunctions';
import {Footer} from './Footer';
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

export function App(props){

  return (
    <Router>
      <div className="App">
        <NavigationBar loggedIn={props.loggedIn} />
        <main>
          <Route exact path="/" 
            component={LandingPage} 
          />
          <HomeRoute {...props} />
          <Route exact path="/Conjunctions" component={Conjunctions} />
        </main>
        <Footer />
      </div>
    </Router>
  );

}

const mapStateToProps = state => ({
  title: state.user.title,
  lastName: state.user.lastName,
  games: state.user.games,
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(App);