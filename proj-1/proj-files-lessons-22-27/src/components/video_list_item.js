// =============================================================
// 
// 	video_list_item.js
//
// =============================================================

// imports 
import React from 'react';

// sets up component
/* the following is the standard way of setting up the video Constant:
const VideoListItem = (props) => {

	// creates a const to pull the data from the passed 'video' variable
	const video = props.video;


	return (

			<li>Video</li>

		);

}; */

// the following is the ES6 way of setting up the video Constant:
// using {video} as the function argument for VideoListItem pass the variable 'video'
// into the VideoListItem object, from the props parent object
const VideoListItem = ({video}) => {
	
	// console logs our video so we can inspect it's elements
	console.log(video);

	// grabs the image's URL from the video array
	const imageUrl = video.snippet.thumbnails.default.url;
	
	// carefully inspect the video object properties, which are attached to the return funtion below, to create the snippet
	// of each video into our app
	// 
	// more info on boostrap column classes = https://getbootstrap.com/examples/grid/
	// 
	return (

			<li className="list-group-item">
				
				<div className="video-list media">
					
					<div className="media-left">

					

						<img className="media-object" src={imageUrl} />
					
					</div>

					<div className="media-body">

						<div className="media-heading">

							{video.snippet.title}

						</div>
					
					</div>
				
				</div>
			
			</li>

		);

};


export default VideoListItem;