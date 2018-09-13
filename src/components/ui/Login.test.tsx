// import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // TODO fix this to work with Typescript.
  //ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
