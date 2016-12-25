// =============================================================
// 
// 	Index.js
// 
// Review notes of proj-1-files-lesson-1-20 for commentary prior to this point
//
// =============================================================
 
// Package imports
 
// React
import React from 'react';
import ReactDOM from 'react-dom';

// imports youtube search package
import YTSearch from 'youtube-api-search';

// imports SearchBar
import SearchBar from './components/search_bar.js'

// this is the youtube API key to access video data
const API_KEY = 'AIzaSyADgejrRxwevOdD8LPoBTpFjIzOQ0mKlVw';

// this adds a new search sample call
YTSearch({key: API_KEY, term: 'surfboards'}, 
	function(data){
		console.log(data);
	}
	)

// 'App' components after section 1 lecture 14
const App = () => {
	
	return <div>
		
		
		<SearchBar />

	</div>
}

// 'App' render into the DOM
ReactDOM.render(<App/>, document.querySelector('.container'))