import React, {Component} from 'react';

// this uses the library of redux-form
// more on the library here : https://github.com/erikras/redux-form
import {reduxForm} from 'redux-form';

// imports action creator
// reduxForm can inject an action creator, to create a container by adding a class
import {createPost} from '../actions/index';

class PostsNew extends Component {
	render(){
		// the following is the equivalent of using
		// const handleSubmit = this.props.handleSubmit
		// this is a part of reduxForms, which handles user submits, storing the form data somewhere in 
		// this component. This is called upon form submit, through the onSubmit form function handler
		// the below is shortened from :
		// const title = this.props.fields.title.
		const {fields:{title, categories, content}, handleSubmit} = this.props;

		return (

			<form onSubmit={handleSubmit}>
				<h3>Create a new post</h3>
				<div className="form-group">
					<label htmlFor="">Title</label>
					<input type="text" className="form-control" {...title}/>
				</div>
				<div className="form-group">
					<label htmlFor="">Categories</label>
					<input type="text" className="form-control" {...categories}/>
				</div>
				<div className="form-group">
					<label htmlFor="">Content</label>
					<textarea className="form-control" {...content}/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>				
			</form>

		);
	}
}

// pay attention to how this is handled with reduxForms
// 
// like connect: first argument is mapStateToProps, 2nd is MapDispatchToProps
// reduxForm: first argument is form cofig, 2nd is mapStateToProps(to handle component state), 3rd is mapDispatchToProps (to handle actions)
export default reduxForm({
// here is the data that sets the form information and attaches it to redux-form
// this is the name of the form, it does not have to match the component, this is for indexing purposes
	form: 'PostsNewForm',

// this declares the fields that the form is going to contain
	fields: ['title', 'categories', 'content'],
	onSubmit: () => {this.props.createPost}

}, null, {createPost})(PostsNew);

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