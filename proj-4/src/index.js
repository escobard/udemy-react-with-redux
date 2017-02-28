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

// this imports the routes, to use within indexjs
import routes from './routes';
import promise from 'redux-promise';

// this makes sure that the promises resolve before hitting our middleware, couldve used this for the weather app
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// Router re-renders the app, and changes the content based on the history of the application
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
