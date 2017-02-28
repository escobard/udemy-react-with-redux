import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// imports the react router component
// browserHistory uses common urls such as
// http://www.blog.ca/post/5
// anything after main url is new url loaded into the app
// hashHistory is the same, except it uses a # after the main url to route its data
import {Router, browserHistory} from 'react-router';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// Router re-renders the app, and changes the content based on the history of the application
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} />
  </Provider>
  , document.querySelector('.container'));
