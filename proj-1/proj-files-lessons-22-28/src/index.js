// =============================================================
// 
// 	index.js
// 
// Review notes of proj-1-files-lesson-1-20 for commentary prior to this point
//
// =============================================================
 
// Package imports
 
// React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// imports youtube search package
import YTSearch from 'youtube-api-search';

// imports local components
// for local components, can drop the .js at the end as its not required pre-compile
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// this is the youtube API key to access video data
const API_KEY = 'AIzaSyADgejrRxwevOdD8LPoBTpFjIzOQ0mKlVw';

// this adds a new search sample call
// moved into the App class constructor for section 2 lesson 22
/* YTSearch({key: API_KEY, term: 'surfboards'}, 
	function(data){
		console.log(data);
	}
);

// 'App' components after section 1 lecture 14
/* scrapped functional component for class based component section 2 lesson 22
const App = () => {
	
	return <div>
		<SearchBar />

	</div>
}
*/

// defines App JS class
class App extends Component {

	// defines the constructor function for App
	constructor(props) {

		// always has to include the super callback
		super(props);

		// state always holds the component's DATA, in other words, it's this component's model.  
		this.state = {
			
			// creates the videos property, with an array value, which will store all the youtube search data
			videos: []
			
		};
		
		// refactored into the class' constructor file to keep track of search data
		YTSearch({key: API_KEY, term: 'surfboards'}
			, (videoData) => {

				// sets the state array to contain the video data
				// for this excersise ONLY, will not use moving forward, as it can confuse other developers
				// this is the proper way to set the state to the videos argument, but if the object key + property have 
				// the same variable name it can be merged into 1 for convinience in ES6
				// Not my favorite feature, but videos can be combined into:
				// YTSearch({key: API_KEY, term: 'surfboards'}
				//, (videos) => {
				// this.setState({videos});
				// and it would work the same as the below statement
				this.setState({ videos: videoData});

				// logs the response data
				console.log(videoData);
			}
		);

	}
	
	// renders SearchBar and VideoList
	// passing data from the parent component to the child is referred to as a prop in React
	// this passes the prop to child javascript component where it can make use of this data
	// This is done in the VideoList render below
	render() {
		return( 
			<div>
				<SearchBar/>
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

// 'App' render into the DOM
ReactDOM.render(<App/>, document.querySelector('.container'))


