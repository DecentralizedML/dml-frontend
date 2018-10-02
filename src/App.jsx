import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';

import { ThemeProvider } from 'styled-components';
import { DMLTheme } from 'kyokan-ui';

import Marketplace from './pages/Marketplace';
import Bounties from './pages/Bounties';
import MyAlgorithms from './pages/MyAlgorithms';
import Upload from './pages/Upload';
import Account from './pages/Account';
import Onboarding from './pages/Onboarding';
import FacebookCallback from './components/Login/FacebookCallback';

import './App.css';

export const App = () => (
  <ThemeProvider theme={DMLTheme}>
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/marketplace" />
        <Route path="/auth/facebook/callback" component={FacebookCallback} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/bounties" component={Bounties} />
        <Route path="/myalgorithms" component={MyAlgorithms} />
        <Route path="/upload" component={Upload} />
        <Route path="/account" component={Account} />
        <Route path="/onboarding" component={Onboarding} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);
// TODO parameterise routes by header and/or sidebar?
