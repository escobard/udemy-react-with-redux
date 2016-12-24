// =============================================================
// 
//  search_bar.js
// 
// Review notes of proj-1-files-lesson-13-20 in index.js for notes prior to this point
// 
// =============================================================

// imports react 
// quick note, imports must be used for JSX to work on any React components

/* This was changed in section 1 lecture 15 to extend the React component component only:
// import React from 'react';
*/

// this imports the 'component' part of the 'react' component only
import React, { Component } from 'react';
//
// Curly braces above with the specific component just mean import that component into this scope 
// and attach to a const variable like this : const Component = React.Component;
//
// The above is the same as doing the following, assigning the Component const to a variable on this scope
// const Component = React.Component;

// creates the const for the SearchBar
// note, the code below is referred to as a 'functional' component, because its 
// essentially a JS function
// 
/* The following was replaced to use ES6 classes instead of functions in section 1 lecture 15
const SearchBar = () => {
 	return <input />
};
*/
// this creates a JS class using ES6 syntax
// more on JS classes here: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
// this was dropped to extend the Component argument of React, not the entire React component
// class SearchBar extends React.Component{
class SearchBar extends Component{

	// each component child of React.Component must include a render function, seen below
	// this is the syntax we use to define methods of a class in JSX
	// render() must return some JSX or we end up with an error
	// this input has the onChange react event handler, which triggers the 'onInputChange' function 
	// found within this class
	render() {
		
		return <input onChange={this.onInputChange} />;

	}

	// the following creates a function to handle the event of an event that happens within React
	// commonly called an 'Event Handler'
	// The syntax below and above is how to return function statements within classes in ES6
	// the function name here is optional for this specific event handler
	// any JS event always has a standard object attached to it, which can be caleld to in the event argument
	// in this case, we have called it 'event'
	onInputChange(event) {

		// to get access of the object that triggers the event, one can use event.target
		// example below:
		
		console.log(event.target.value);
		//
		// this will update the console log with the values of the SearchBar.render().input.value
		//
		// 
	}
	// this can be used as well to handle events, but is not as scalable or organized as the function above
	// render (){
	// 	return <input onChange={(event) => console.log(event.target.value)} />;
	//  
	//  can be further shortened with:
	//  
	//  return <input onChange={event => console.log(event.target.value)} />; 	
	//
	// }
	// 
	// this eliminates the need to create the onInputChange function scope entirely


};
//
// This still creates a renderable component called SearchBar to used anyhwere as such: <SearchBar />
//The above is further defined as the following:
// class = define a new class
// childName = defines the name of the class, in this case 'SearchBar'
// extends = give the className acess to all of the functionality of the component to the right
// in other words, makes the className a child of the extends argument component
// parentName = extends the className component as a child of the parentName component, giving the child access to all the functions
// of its parent, in other words SearchBar now has access to all the functions of the React.Component

// this exports the SearchBar const for any other JS file to grab
export default SearchBar;
// 
// more details here:
// very critical to export the exact correct component from each component