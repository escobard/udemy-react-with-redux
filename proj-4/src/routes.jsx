import React from 'react';

// this is what defines the route between a URL and a component within react
// this is used instead of the standard index.js used to render the main <App /> component
import {Route, IndexRoute} from 'react-router';

import App from './components/app';

// the following code sets up the route path for an indvidual component
// in this case the initial route, which is /, shows our App component
// // if we did something like this :
// <Route path='/comp1' component{Component1} />
// the comp1 path renders the Component1 component
// 
// the following allows for component exports, by using export default ();
export default (
<Route path='/' component={App} />
);
