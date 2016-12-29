// =============================================================
// 
// 	book_list.js
// this file is known as a CONTAINER
// a CONTAINER is a react component that has a direct connection to the STATE (generated by reducers) managed by redux
// esentially, containers are components that handle data that comes from the react state
// =============================================================


import React, { Component } from 'react';

// imports the redux library, to forge a connection between the state and the main application
// imports the connect function
import { connect } from 'react-redux';

class bookList extends Component {

	// this will set up the function to render our list
	// we will be adding the list of books to our props object later
	renderList(){

		// creates the map of the books array, setting up an object for each index and calling it 'book'
		return this.props.books.map((book) => {

			// returns our book properties within an li
			return (
				<li key={book.title} className="list-group-items">
					
					{book.title}

				</li>
			);
		});
	};


	// this sets up the component for our booklist's HTML
	render(){
		<ul className="list-group col-sm-4">
			{this.renderList()}
		</ul>
	};

};

// exactly how it sounds, it maps the state into the props method
// whatever returns, will show up as this.props inside of BookList
// this is a built in function of React
function mapStateToProps(state) {
	
	// for example, this will add asdf to props, making it callable by using this.props.asdf
	/* return {
	asdf: '123'
	};
	*/

	// this defines the state of this component
	return {

		books: state.books

	};

};

// this connects the two functions in this container together when exported
// connect takes a function, and a component (class only), and produces a container
// a container is again a component that connects react with the redux state
export default connect(mapStateToProps)(bookList);