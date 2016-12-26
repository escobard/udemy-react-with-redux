// =============================================================
// 
// 	video_list.js
//
// =============================================================

// imports
import React from 'react';

// defines our constructor function
// since we added a prop in index.js, this was passed to this component attached to the react global .props object
const VideoList = (props) => {

	// this returns the array of videos from the .state method of the App class, for use in the app
	// const videos = props.videos;

	// to set up the classes for HTML elements we use className in JSX
	// this is done to avoid naming conflicts with the class definitions
	// will be using boostrap - more on bootstrap CSS here : https://getbootstrap.com/examples/grid/
	// familiarize myself with boostrap  
	// 
	// passes the videos.length into the UL
	// 
	return (
		
		<ul className="col-md-4 list-group">
			
			{props.videos.length}

		</ul>
	);

};

// exports this element out
export default VideoList;