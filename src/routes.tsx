import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import App from './components/pages/App';

export const RouteMap: React.StatelessComponent<{}> = () => (
  <div>
    <Switch>
      <Redirect exact from="/" to="/app" />
      <Route path="/app" component={App} />
    </Switch>
  </div>
);