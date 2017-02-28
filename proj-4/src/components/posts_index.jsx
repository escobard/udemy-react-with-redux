import React, {Component} from 'react';

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
		console.log('this would be a good time to call an action creator to fetch posts');
	}
	render(){
		return (

			<div>List of blog posts</div>

		);
	}

}

export default PostsIndex;