import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/App/App';
import { HashRouter as Router } from 'react-router-dom';
import store from './redux/store';

ReactDom.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);

