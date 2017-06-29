import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

// this is attached to the store middleware, allowing for promises to be used for async calls
// IMPORTANT because without this, the state does NOT wait for promises to complete before fetching props
import promise from 'redux-promise';


import reducers from './reducers';
import PostsIndex from './components/posts_index';

// the promise method is added as the applyMiddleware argument
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter> 
   <div>
   	<Route path="/" component={PostsIndex}></Route>
   </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
