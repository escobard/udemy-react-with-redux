// components / views: something that creates HTML
// create a new component. This component should produce some HTML


/*=====================================================

 es 2016 syntax : REACT and ES 6 code, will be described as such throughout the course

======================================================*/

// ES6 Notes:
// ON JAVASCRIPT MODULES - IMPORTS / EXPORTS IN ES6
// code is 'syloed' or separated in other libraries that we install in our project - this means to say
// code that is declared in other files that we produce will have 0 contact with other files unless
// they are specifically declared to do so
// using modules allows you to call upon variables / objects from other JS files, and imports them into your library

import React from 'react';

// ^ this is broken down below
// import = go find the library
// React = variable that the 'react' library is assigned to 
// from 'react' = installed in the application as a dependency, refer to package.json, installed react in the node_modules directory
// once 'react' library is found, assign that library to the variable React
// 
// ON COMPILER:
// 
// When compiler is ran, the babel library makes sure this file has the 'react' library listed as a dependency after import
/*========================================================*/


// create app const. more on const here : https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const
// const declares a variable that is never going to change 
// 
// 
const App = function (){
	// JSX allows us to write what looks like HTML but is really just javascript behind the scenes
	// JSX can be viewed after transpile from original js here : https://babeljs.io/
	// this is transpired by babel and webpack that polyfills / compiles code before it hits the browser
	return <div>Hi!<//div>;
};


/* take this component's HTML and put it on the page (in the DOM)
// this will generate an error, because React is undefined
// But the function is basically asking React to .render the const App
//
*/
React.render(App);
