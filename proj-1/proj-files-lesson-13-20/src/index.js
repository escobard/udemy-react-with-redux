// =============================================================
// 
// 	Index.js
// 
// Review notes of proj-1-files-lesson-13-20 for notes prior to this point
// 
// =============================================================
 
// Package imports
 
// React
import React from 'react';
import ReactDOM from 'react-dom';

// imports youtube search package
import YTSearch from 'youtube-api-search';

// imports SearchBar
// 
// note: this does not work, since to get a component from a directory that is not your app components, you need to add an actual file 
// reference by using a relative path to the file we are importing it from
// to grab the correct file; as such, the following will throw an error : import SearchBar from 'search_bar'
// 
// this is how to grab from local JS components:
// 
import SearchBar from './components/search_bar.js'



// this is the youtube API key to access video data
const API_KEY = 'AIzaSyADgejrRxwevOdD8LPoBTpFjIzOQ0mKlVw';

// this adds a new search sample call
// they key has to be the youtube API key
// the term is the search term, in this case we are making the search string === surfboards
// this first object is the request, using the API to request data, and the term: property as the search term
YTSearch({key: API_KEY, term: 'surfboards'}, 
	// first argument is an object to set API terms, this argument is to do something with that data
	// this function is the response function to do something with the fetched data, should test if this is a JS promise
	function(data){

		// this logs the RESPONSE of the YTSearch function, which is showed in an object in the console
		// can be used to display the list from the GTFS api! keep this in mind!
		console.log(data);
	}
	)

// 'App' components original : 
/*
const App = () => {
	return <div>Hi!</div>;
}
*/

// 'App' components after section 1 lecture 14
const App = () => {
	
	//returns our app container div
	// returns our search bar component input, as <SearchBar />
	return <div>
		
		
		<SearchBar />

	</div>
}

// 'App' render into the DOM
ReactDOM.render(<App/>, document.querySelector('.container'))