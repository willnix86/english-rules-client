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
import { userLogin } from '../../actions/userActions';
import { getUserSentences } from '../../actions/prepositionsActions';
import { getUserWords } from '../../actions/wordTypeActions';
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

export class App extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');

    if (token) {

        this.props.dispatch(userLogin(userId, token));
        this.props.dispatch(getUserSentences(userId, token));
        this.props.dispatch(getUserWords(userId, token));

    };
  }

  render() {

    return (
      <Router>
        <div id="#App" className="App">
          <NavigationBar loggedIn={this.props.loggedIn} />
          <main>
            <Route exact path="/" 
              component={LandingPage} 
            />
            <HomeRoute {...this.props} />
            <ConjunctionsRoute {...this.props} />
            <WordTypesRoute {...this.props} />
            <PrepositionsRoute {...this.props} />
            <Route exact path="/editGames" component={EditGames} {...this.props} />
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