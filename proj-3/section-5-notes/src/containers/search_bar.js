// =============================================================
// 
// 	search_bar.js
//
// =============================================================

import React, { Component } from 'react';

class SearchBar extends Component {

	// initiates the state of our component using the usual methods
	constructor(props){
		super(props);

		// this create the state of this component, for the search term
		this.state = { searchTerm: '' }

		// to bind .this to any specific function so it points to the constructor, we use the following method:
		this.onInputChange = this.onInputChange.bind(this);
		// broken down below
		// this. = the SearchBar class
		// onInputChange = the function within the SearchBar class called onInputChange
		// .bind(this) = binds the SearchBar class to the this. parameter within the onInputChange function as a result
	}

	// interesting to remember, all event handlers create a standard event object, which contains the actual event action
	// 
	onInputChange(event) {

		// this logs the value of the input .target being the parent element (the input) and .value being the value of the input
		console.log('The search bar value is: ' + event.target.value);

		// this makes it so that the final value of the input sets the .state.searchTerm value
		// this throws an error because .this is bound to the event change function, not the constructor
		// to fix this, refer to the constructor notes 'bind' above
		this.setState({ searchTerm: event.target.value})
	}

	render(){

		// this is going to be a controlled field
		// controlled field is a form element where the value is set by the STATE of the component 
		return (
		
			<form className="input-group">
				
				
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.searchTerm}
					onChange={this.onInputChange}
				/>
				
				<span className="input-group-btn">
					
					<button type="submit" className="btn btn-secondary">Submit</button>

				</span>

			</form>

		);

	}

};


export default SearchBar;