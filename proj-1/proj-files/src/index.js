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
// this generates an error because another dependency is still missing

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
// 
// ON REACT COMPILING TO DOM:
// Needs another dependency, called react-dom, which is what actually renders the compiled code into the DOM for the user to see

import ReactDOM from 'react-dom';
/*========================================================*/


// create app const. more on const here : https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const
// const declares a variable that is never going to change 
// 
// the code here is a type of component that is a class, not an instance 
// in other words this is a factory that produces components, that get rendered to the DOM

const App = function (){
	// 
	// this gets instanced into :
	// App = function App(){
	// 	return React.createElement(
	// 		"div",
	// 		null,
	// 		"Hi!"
	// 	);
	// };
	// 
	// JSX allows us to write what looks like HTML but is really just javascript behind the scenes
	// JSX can be viewed after transpile from original js here : https://babeljs.io/
	// this is transpired by babel and webpack that polyfills / compiles code before it hits the browser
	// 
	// when you write an HTML element, this is compiled / rendered into : React.createElement('div', null)
	// This is considered a component 'class' until it gets rended into the DOM, where it becomes a component 'instance'
	return <div>Hi!</div>;
};

// the following creates an 'instance' of a 'class', the 'class' being the factory (in this case the const App) the 'instance' being
// the DOM components that are rendered by React.createElement();

<App></App>

// the above can also be written with <App /> which is valid self closing JSX

/* //* take this component's HTML and put it on the page (in the DOM)
// this will generate an error, because React is undefined
// But the function is basically asking React to .render the const App
//
*//
// ReactDOM is accesed here instead, to actually pass the const App into the ReactDOM.render argument, to pass the const App into the DOM
// The problem before was that we were passing a component 'class' into the .render(argument) instead of an 'instance'.
// this was the code previously :  ReactDOM.render(App);
// this creates an 'instance' of the const App (or component class App) and passes it to ReactDOM to .render();
ReactDOM.render(<App />);
