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

// avoid creating any components within the routes file, for code cleneliness
const Greeting = () => {
	return (
		<div>HELLO THERE!</div>
	);
}

/* this is the way to render a single route
export default (
<Route path='/' component={App} />
); */

// here is how you add more than a single route
// since the three children route are nested within the main route
// the other three will automatically have the / added to the url, since the / is the parent route
export default (
<Route path="/" component={App}>
	<Route path="greet" component={Greeting}/>
	<Route path="greet2" component={Greeting}/>
	<Route path="greet3" component={Greeting}/>
</Route>
);