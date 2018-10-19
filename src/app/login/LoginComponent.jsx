import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  const handleSignIn = (event) => {
    event.preventDefault();

    const email    = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    props.authenticate(email, password);
  };

  return (
    <div>
      <h3>Login</h3>
      <input
        id="email"
        type="text"
        defaultValue="user@kyokan.io"
        placeholder="email"
      />
      <input
        id="password"
        type="password"
        defaultValue="password123"
        placeholder="password"
      />
      <input
        type="submit"
        value="Login"
        onClick={handleSignIn}
      />
    </div>
  );
};

Login.defaultProps = {
  isAuthenticated: false,
};

Login.propTypes = {
  isAuthenticated : PropTypes.bool,
  authenticate    : PropTypes.func.isRequired,
};

export default Login;
