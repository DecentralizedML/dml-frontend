import * as React from 'react';
import queryString from 'query-string';

class FacebookCallback extends React.Component {

  componentDidMount () {
    // TODO Saga most of this.
    const params = queryString.parse(this.props.location.search);
    fetch(`https://elegant-brisk-indianjackal.gigalixirapp.com/auth/facebook/callback?code=${params.code}`)
      .then(response => {
        // TODO catch unexpected responses and throw.
        return response.json();
      })
      .then(data => {
        console.log(data);
        // TODO store data.jwt and other detail in the user state.
        debugger;
        window.location.assign(params.state);
      });
  }

  render () {
    return (
      <pre>{ JSON.stringify(this.props.location) }</pre>
    );
  }
}

export default FacebookCallback;
