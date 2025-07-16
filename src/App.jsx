import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import '@Styles/App.scss';

import { Home } from '@Pages';
import { GameFactory } from '@Elements';

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <GameFactory>
          <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
        </GameFactory>
      </BrowserRouter>
    );
  }
}
