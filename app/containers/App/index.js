/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import DisplayItems from 'containers/DisplayItems/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Nav from '../../components/Nav';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/display" component={DisplayItems} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
