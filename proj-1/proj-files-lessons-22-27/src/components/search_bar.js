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

	// each class based from React.Component, has its own state()
	// whenever the component state is changed, the component (in this case 'SearchBar') will immediately re-render,
	// in other words, run the render() function of this class again.
	// this is how to initialize the state in a class based React component
	// constructor is called all the time, whenever a new instance of the parent class gets called, constructor gets called
	constructor(props) {

		// calls the parent method constructor of the constructor of this class, which would go like this
		// constructor assigns the (props) variable to the 'SearchBar' constructor function, which is Component
		// super calls the constructor parent of the Component method, with the callback below
		super(props);

		// can initialize variables, change the DOM, etc.
		// will be expanded in later sections
		// this initializes state, by creating a new object and assigning it to constructor(props).state
		// this assigns the property term to state, creating the object chain: state.term
		// in short, this stores the value of the SearchBar input, into the empty string ('' of the term property)
		// which can be sent to other parts of our app
		// this is the only place in our application where we can manually change the state of the class from the parent function
		// anything within the term property value, will appear as the render.input.value initially
		this.state = { term: 'Starting value'};
	}

	// each component child of React.Component must include a render function, seen below
	// this is the syntax we use to define methods of a class in JSX
	// render() must return some JSX or we end up with an error
	// this input has the onChange react event handler, which triggers the 'onInputChange' function 
	// found within this class
	render() {
		
		/*
	       This was scrapped to update the state on input change for section 1 lesson 18
		   
		   return <input onChange={this.onInputChange} />; 
		 */
		
		// this is how to change the state from the render function of the class
		// setState() is nattive to React, setting the state of the class to the argument's value
		// the object within setState({}) contains the with the property 'term' created in the constructor function of the class
		// the value of 'term' is determined by the event.target.value, binding the 'value' call back to this input's current value
		// this.setState is the only PROPER way to call a component's state
		// the value property of this input will be updated with the this.state.term callback, which calls the value of the state
		// the value of the input is a controlled form element, which is controlled by the state of the class
		// since the value is changed, and on the inputs change the class is re-rendered, each time the value changes on the input
		// this updates input's actual value accordingly
		return (
			<div>
			<h4>Search Bar</h4>
			<input 
			value={this.state.term}
			onChange={event => this.setState({ term: event.target.value})} />
			<p>Value of the input: <span>{this.state.term}</span></p>
			</div>
			);
		// 
		// calling a variable in JSX within the HTML area must always be referenced by { curly brackets }
		// after the input has been changed, the updated this.state.term value is updated in the dom immediately
		// 
		// a cleaner way to call this would be by using the following:
		/* return (
			<div>
			<input onChange={this.onInputChange} />;
			</div>
			); */
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
		// this is refactored form instructor notes, to keep this class cleaner, but does not currently work
		// this.setState({ term: event.target.value});
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