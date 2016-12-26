// =============================================================
// 
// 	video_list.js
//
// =============================================================

// imports
import React from 'react';
import VideoListItem from './video_list_item';

// defines our constructor function
// since we added a prop in index.js, this was passed to this component attached to the react global .props object
const VideoList = (props) => {

	// this returns the array of videos from the .state method of the App class, for use in the app
	// const videos = props.videos;

	// returns the array map of the data
	const videoItems = props.videos.map(
		
		// assigns the video variable to each index of the videos array then returns a function
		// also passes the property name video, aka the data of the corresponding index of the array
		// into the VideoListItem component
		// 
		// the key callback allows for a unique key to be assigned to each of the returned elements
		// to assign the video.etag (an ID of sorts contained within each of the videos array objects)
		// as an identifier to EACH video list item
		// 
		// VideoList takes the onVideoSelect property from App and passes it into VideoListItem
		// 
		(video) => {

				return (
					<VideoListItem 
					onVideoSelect={props.onVideoSelect}
					key={video.etag} 
					video={video}/>
				);
	});

	// to set up the classes for HTML elements we use className in JSX
	// this is done to avoid naming conflicts with the class definitions
	// will be using boostrap - more on bootstrap CSS here : https://getbootstrap.com/examples/grid/
	// familiarize myself with boostrap  
	// 
	// using array maps:
	// var array = [1,2,3];
	// array.map(function(number(DATA OF EACH ARRAY INDEX GOES IN HERE)) { return number * 2})
	// 
	// passes the videos.length into the UL
	// 
	// passes the videoItems const into the VideoList component
	// 
	// When adding variables from a const constructor function 
	return (
		
		<ul className="col-md-4 list-group">

			{videoItems}

		</ul>
	);

};

// exports this element out
export default VideoList;