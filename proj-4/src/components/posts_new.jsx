import React, {Component} from 'react';

// this uses the library of redux-form
// more on the library here : https://github.com/erikras/redux-form
import {reduxForm} from 'redux-form';

class PostsNew extends Component {
	render(){
		return (

			<form action="">
				<h3>Create a new post</h3>
				<div className="form-group">
					<label htmlFor="">Title</label>
					<input type="text" className="form-control"/>
				</div>
				<div className="form-group">
					<label htmlFor="">Categories</label>
					<input type="text" className="form-control"/>
				</div>
				<div className="form-group">
					<label htmlFor="">Content</label>
					<textarea className="form-control"/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>				
			</form>

		);
	}
}

// like connect
export default reduxForm({
// here is the data that sets the form information and attaches it to redux-form
// this is the name of the form, it does not have to match the component, this is for indexing purposes
	form: 'PostsNewForm',

// this declares the fields that the form is going to contain
	fields: ['title', 'categories', 'content']

})(PostsNew);

/*
Here is how redux-form works in a nutshell:
// user types something in then the state changes, based on the determined fields, and form name
// only difference between redux-form and the forms we used before in the course, is that redux-form takes the data
// and applies it to the application level state, instead of the component level state, allowing you to use the data globally
state ==={
	form: {
		PostsNewForm: {
			title:'...',
			categories: '...',
			content: '...'
		}
	}
}
 */