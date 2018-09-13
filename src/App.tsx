import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';

import Marketplace from './components/pages/Marketplace';
import Bounties from './components/pages/Bounties';
import Upload from './components/pages/Upload';
import Account from './components/pages/Account';
import Onboarding from './components/pages/Onboarding';

import './App.css';

export const App: React.StatelessComponent<{}> = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/marketplace" />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/bounties" component={Bounties} />
        <Route path="/upload" component={Upload} />
        <Route path="/account" component={Account} />
        <Route path="/onboarding" component={Onboarding} />
      </Switch>
    </BrowserRouter>
  </div>
);
// TODO parameterise routes by header and/or sidebar