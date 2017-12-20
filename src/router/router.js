import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from 'components/Loading/Loading';
import Index from 'bundle-loader?lazy&name=home!pages/Car/Index';
import Bundle from './Bundle';

const createComponent = component => () => (
  <Bundle load={component}>
    {
        Component => (Component ? <Component /> : <Loading />)
    }
  </Bundle>
);

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={createComponent(Index)} />
      <Route path="/device" component={createComponent(Index)} />
    </Switch>
  </div>
);
