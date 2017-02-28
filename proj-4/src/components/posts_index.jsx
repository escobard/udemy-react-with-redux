import React, {Component} from 'react';
import {connect} from 'react-redux';
// there is no need to use bindActionCreators using the dispatch shortcut for actions
// all react applications using the long method should be refactored now
// import {bindActionCreators} from 'redux';
import fetchPosts from '../actions/index';

// this adds the link component from react-router
import {Link} from 'react-router';

class PostsIndex extends Component {
	
	// this is called a lifecycle method
	// this is called as soon as this component is mounted into the application
	// in my weather application, this would be a good way to call the local weather data AFTER the geolocation has been set
	// for example, within the if statements in place for the geolocation, if the weather data is loaded, call a new component
	// which contains a switch, which by default does nothing, but if the geolocation is loaded it returns the data from the weather
	// fetch api. this allows the fetch to only happen ONCE, when the component is mounted, and the component is only mounted
	// IF the geolocation coordinates were fetched. This basically calls a function outside of the render / return loop.
	// 
	// 
	// this method is called by react only when the component is about to be called to the DOM for the first time
	// it will NOT be called on subsequent re-renders
	componentWillMount(){
		// console.log('this would be a good time to call an action creator to fetch posts');
		// now that we have our action creators synced to our component, we can call it within the lifecycle method to fetch the
		// posts as soon as this component is loaded
		this.props.fetchPosts();
	}
	render(){
		return (
			<div>
			<div className="text-xs-right">
				<Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
			</div>
			<div>List of blog posts</div>
			</div>
		);
	}

}
/* this is the standard way to call an action into the props of a component
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchPosts}, dispatch);
} 

export default connect(null, mapDispatchToProps)(PostsIndex);*/

/* this is another way of dispatching actions into the component props, without the need to call the mapDispatchToProps boilerplate
export default connect(null, {fetchPosts: fetchPosts})(PostsIndex); */

// shortened even further with ES6 and webpack:
export default connect(null, {fetchPosts})(PostsIndex);