import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {NavigationBar} from './NavigationBar';
import {LandingPage} from './LandingPage';
import {Home} from './Home';
import {SentenceVariation} from './SentenceVariation';
import {Footer} from './Footer';
import './App.css';

export function App(props){

  const HomeRoute = () => (
    <Route path="/home" render={() => (
      props.loggedIn ? 
        ( <Home {...props} /> ) 
      :
        ( <Redirect to="/" />)
    )} 
    />
  );

  return (
    <Router>
      <div className="App">
        <NavigationBar loggedIn={props.loggedIn} />
        <main>
          <Route exact path="/" 
            component={LandingPage} 
          />
          <HomeRoute {...props} />
          <Route exact path="/SentenceVariation" component={SentenceVariation} />
        </main>
        <Footer />
      </div>
    </Router>
  );

}

const mapStateToProps = state => ({
  title: state.title,
  lastName: state.lastName,
  games: state.games,
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(App);