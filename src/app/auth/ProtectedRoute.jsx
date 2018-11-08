import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import storage from '../../utils/storage';

const ProtectedRoute = ({ component: Component, initialized, email, firstName, lastName, walletAddress, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!initialized) {
          return null;
        }

        if (!email || !storage.token) {
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

        console.log({
          firstName,
          lastName,
          walletAddress,
        });

        if (!firstName || !lastName) {
          return (
            <Redirect
              to={{
                pathname : '/details',
                state    : {
                  from: props.location,
                },
              }}
            />
          );
        }

        if (!walletAddress) {
          return (
            <Redirect
              to={{
                pathname : '/metamask',
                state    : {
                  from: props.location,
                },
              }}
            />
          );
        }

        if (storage.token !== null) {
          return (
            <Component {...props} />
          );
        }
      }}
    />
  );
};

export default connect(
  ({ account }) => ({
    email: account.email,
    firstName: account.firstName,
    lastName: account.lastName,
    walletAddress: account.walletAddress,
    initialized: account.initialized,
  }),
)(ProtectedRoute);
