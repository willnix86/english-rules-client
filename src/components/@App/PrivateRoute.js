import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }) => {
    const isLoggedIn = props.loggedIn;
  
    return (
      <Route
        {...props}
        render={props =>
          isLoggedIn ? (
            <Component {...props} />
          ) : (
            ( <Redirect to="/" />)
          )
        }
      />
    )
  }
  
  export default PrivateRoute