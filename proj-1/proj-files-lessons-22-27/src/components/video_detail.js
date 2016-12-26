// =============================================================
// 
// 	video_detail.js
//
// =============================================================

// imports
import React from 'react';

// videodetail component
const VideoDetail = ({video}) => {

	// to make sure the iframe is created with unique videos per video detail component, two consts will have to be made
	const videoId = video.id.videoId;

	// this is the normal JS version to create the video url dynamic variable
	// const url = 'https://www.youtube.com/embed/' + videoId;
	// 
	// this is the ES6 JS version
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		
		<div className="video-detail col-md-8">
			
			<div className="embed-responsive embed-responsive-16by9">
				
				<iframe className="embed-responsive-item" src={url}></iframe>

			</div>
			<div className="details">
				
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>

			</div>

		</div>

	);


};

export default VideoDetail;