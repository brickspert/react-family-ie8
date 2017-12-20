import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducers.js';

import promiseMiddleware from './middleware/promiseMiddleware';

const store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

export default store;
