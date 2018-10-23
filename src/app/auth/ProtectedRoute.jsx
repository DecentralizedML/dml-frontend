import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import storage from '../../utils/storage';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (storage.token !== null) {
          return (
            <Component {...props} />
          );
        } else {
          return (
            <Redirect
              to={{
                pathname : '/login',
                state    : {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
